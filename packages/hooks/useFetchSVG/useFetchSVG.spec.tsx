import { h } from 'preact';
import { act } from 'preact/test-utils';
import { mount } from 'enzyme';

import { useFetchSVG } from '@hooks/useFetchSVG/useFetchSVG';

const exampleSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"/></svg>';

const finalSVG =
  '<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z"></path></svg>';

describe('useFetchSVG Hook', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(exampleSVG),
      } as any),
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch SVG successfully', async () => {
    let wrapper;

    function TestComponent() {
      const svgComponent = useFetchSVG('example');
      return <div>{svgComponent}</div>;
    }

    await new Promise((resolve) => {
      wrapper = mount(<TestComponent />);
      setTimeout(resolve, 0);
    });

    expect(global.fetch).toHaveBeenCalled();
    expect((wrapper as any).html()).toContain(finalSVG);
  });

  it('should handle fetch error', async () => {
    jest.spyOn(console, 'error').mockImplementation();

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject({
        error: 'error',
      } as any),
    );
    let wrapper;

    function TestComponent() {
      const svgComponent = useFetchSVG('example');
      return <div>{svgComponent}</div>;
    }

    await act(async () => {
      wrapper = mount(<TestComponent />);
    });
    // The CDN failure is retried once on S3 (#98): wait for the second request too.
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(global.fetch).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  it('should not fetch SVG if name is empty', async () => {
    function TestComponent() {
      const svgComponent = useFetchSVG('');
      return <div>{svgComponent}</div>;
    }
    mount(<TestComponent />);

    expect(global.fetch).not.toHaveBeenCalled();
  });
});

describe('useFetchSVG S3 fallback (#98)', () => {
  const cdnUrl = 'https://cdn.no-gravity.es/no-gravity-elements/icons/example.svg';
  const s3Url =
    'https://s3.eu-north-1.amazonaws.com/cdn.no-gravity.es/no-gravity-elements/icons/example.svg';
  const okResponse = { ok: true, status: 200, text: () => Promise.resolve(exampleSVG) } as any;
  const forbidden = { ok: false, status: 403, text: () => Promise.resolve('<html>blocked</html>') };

  function TestComponent() {
    const svgComponent = useFetchSVG('example');
    return <div>{svgComponent}</div>;
  }

  const render = async () => {
    const wrapper = mount(<TestComponent />);
    await new Promise((resolve) => setTimeout(resolve, 0));
    return wrapper;
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('uses only the CDN when the CDN answers', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(okResponse);

    const wrapper = await render();

    expect(fetchMock.mock.calls).toEqual([[cdnUrl]]);
    expect(wrapper.html()).toContain(finalSVG);
  });

  it('fetches the same key from S3 once when the CDN request has a network error', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new TypeError('Failed to fetch'))
      .mockResolvedValueOnce(okResponse);

    const wrapper = await render();

    expect(fetchMock.mock.calls).toEqual([[cdnUrl], [s3Url]]);
    expect(wrapper.html()).toContain(finalSVG);
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('fetches the same key from S3 once when the CDN answers 403', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce(forbidden as any)
      .mockResolvedValueOnce(okResponse);

    const wrapper = await render();

    expect(fetchMock.mock.calls).toEqual([[cdnUrl], [s3Url]]);
    expect(wrapper.html()).toContain(finalSVG);
    expect(wrapper.html()).not.toContain('blocked');
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('shows no icon and logs one error when the CDN and S3 both fail', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new TypeError('Failed to fetch'))
      .mockResolvedValueOnce(forbidden as any);

    const wrapper = await render();

    expect(fetchMock.mock.calls).toEqual([[cdnUrl], [s3Url]]);
    expect(wrapper.html()).toBe('<div></div>');
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });
});

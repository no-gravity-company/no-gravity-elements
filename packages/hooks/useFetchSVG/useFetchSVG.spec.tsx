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

    expect(global.fetch).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  it('should not fetch SVG if name is empty', async () => {
    let wrapper;

    function TestComponent() {
      const svgComponent = useFetchSVG('');
      return <div>{svgComponent}</div>;
    }

    await act(async () => {
      wrapper = mount(<TestComponent />);
    });

    expect(global.fetch).not.toHaveBeenCalled();
  });
});

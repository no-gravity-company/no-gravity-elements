import { html, fixture } from '@open-wc/testing';
import { getByText } from '@testing-library/dom';
import './lib/index';

describe('display-box web component snapshot test', () => {
    it.each`
        label        | value
        ${undefined} | ${undefined}
        ${'FOO'}     | ${undefined}
        ${undefined} | ${'5'}
        ${'FOO'}     | ${'5'}
        ${'BAR'}     | ${'42'}
    `(
        'WHEN rendered THEN it should match the snapshot',
        async ({ label, value }) => {
            const el = await fixture(html`
                <nge-display-box label="${label}" value="${value}" />
            `);
            expect(el.shadowRoot).toMatchSnapshot();
        }
    );
});

describe('display-box web component functional test', () => {
    it('renders props correctly', async () => {
        const label = 'Label Text';
        const value = 42;

        const el = await fixture(html`
            <nge-display-box label="${label}" value="${value}" />
        `);

        expect(
            el.shadowRoot?.querySelector('span:nth-child(2)')?.textContent
        ).toEqual(label);
        expect(
            el.shadowRoot?.querySelector('span:nth-child(4)')?.textContent
        ).toEqual(String(value));
    });
});

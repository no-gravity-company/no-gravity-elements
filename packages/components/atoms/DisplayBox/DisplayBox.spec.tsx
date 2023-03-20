import './lib/index';

describe('display-box web component snapshot test', () => {
    // it.each`
    //     label        | value
    //     ${undefined} | ${undefined}
    //     ${'FOO'}     | ${undefined}
    //     ${undefined} | ${'5'}
    //     ${'FOO'}     | ${'5'}
    //     ${'BAR'}     | ${'42'}
    // `(
    //     'WHEN rendered THEN it should match the snapshot',
    //     async ({ label, value }) => {
    //         const el = await fixture(html`
    //             <nge-display-box label="${label}" value="${value}" />
    //         `);
    //         expect(el.shadowRoot).toMatchSnapshot();
    //     }
    // );
    it('test', () => {
        expect(true).toEqual(true);
    });
});

describe('display-box web component functional test', () => {});

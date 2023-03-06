import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import './lib/index.js';

const snapshotCases = [{ label: 'FOO' }, { label: 'BAR' }];

describe('nge-info-box snapshot test', () => {
    snapshotCases.forEach(({ label }) => {
        it(`WHEN rendered with label: ${label} THEN it should match the snapshot`, async () => {
            const el = await fixture(html`<nge-info-box label="${label}" />`);
            expect(el).shadowDom.to.equalSnapshot();
        });
    });
});

describe('nge-info-box functionality test', () => {
    it('WHEN text is typed into the input THEN it is displayed correctly', async () => {
        const el = await fixture(html`<nge-info-box label="FOO" />`);
        const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
        const output = el.shadowRoot!.querySelector('span:last-of-type');

        input.value = '42';
        input.dispatchEvent(new Event('input'));
        expect(output?.textContent).to.equal('42');
    });

    it('WHEN the button is clicked THEN it emits the buttonClick event', async () => {
        const el = await fixture('<nge-info-box label="FOO" />');
        const button = el.shadowRoot!.querySelector('button');
        const eventSpy = Sinon.spy();
        window.addEventListener('buttonClick', eventSpy);
        button?.click();

        expect(eventSpy.calledOnce).to.be.true;
        expect(eventSpy).to.have.been.calledWith(
            Sinon.match.has('detail', 'Event detail')
        );
    });
});

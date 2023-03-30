import { JSX } from 'preact';

export interface InfoBoxProps {
    label: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'nge-info-box': InfoBoxProps & Partial<HTMLElement>;
        }
    }
}

export type InfoBoxElement = JSX.Element & InfoBoxProps;

export interface InfoBoxElementConstructor extends CustomElementConstructor {
    new (): InfoBoxElement;
}

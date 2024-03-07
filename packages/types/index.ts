import { FunctionComponent } from 'preact';

export type CustomFunctionComponent<Props> = FunctionComponent<Props> & {
  observedAttributes?: string[];
};

export enum TypographySizes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  h7 = 'h7',
  sp = 'sp',
  p = 'p',
  lp = 'lp',
  legal = 'legal',
}

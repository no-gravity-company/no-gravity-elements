import { FunctionComponent } from 'preact';

export type CustomFunctionComponent<Props> = FunctionComponent<Props> & {
  observedAttributes: string[];
};

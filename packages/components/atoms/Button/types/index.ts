import { ButtonTypes, IconNames, StringBoolean } from '@no-gravity-elements/types';

export interface ButtonProps {
  value: string;
  variant?: ButtonTypes;
  icon?: IconNames;
  disabled?: StringBoolean;
  type?: string;
  loading?: StringBoolean;
  href?: string,
  target?: string,
  rel?: string,
  iconside?: 'left' | 'right';
  fullwidth?: StringBoolean;
}

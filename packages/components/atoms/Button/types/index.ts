import { ButtonTypes, IconNames, StringBoolean } from '@no-gravity-elements/types';

export interface ButtonProps {
  value: string;
  type?: ButtonTypes;
  icon?: IconNames;
  disabled?: StringBoolean;
}

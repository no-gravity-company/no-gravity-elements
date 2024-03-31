import { ButtonTypes, IconNames } from '@no-gravity-elements/types';

export interface ButtonProps {
  type?: ButtonTypes;
  icon?: IconNames;
}

export interface ButtonEvents {
  onClick: (type: ButtonTypes) => void;
}

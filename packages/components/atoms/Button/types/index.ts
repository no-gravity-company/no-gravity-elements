export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  destructive = 'destructive',
  outline = 'outline',
  ghost = 'ghost',
  disabled = 'disabled',
}

export interface ButtonProps {
  type?: ButtonTypes;
}

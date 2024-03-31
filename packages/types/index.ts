// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentEvents<T> = Record<keyof T, (...args: any[]) => void>;

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
  button = 'button',
}

export enum IconSizes {
  extraSmall = 'extra-small',
  small = 'small',
  medium = 'medium',
  regular = 'regular',
  large = 'large',
  extraLarge = 'extra-large',
}

export enum IconNames {
  angleLeft = 'angle-left',
  angleRight = 'angle-right',
  cross = 'cross',
  eye = 'eye',
  menuBurger = 'menu-burger',
  search = 'search',
}

export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  destructive = 'destructive',
  outline = 'outline',
  ghost = 'ghost',
  disabled = 'disabled',
}

export default {};

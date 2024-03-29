// import type { ButtonProps } from '@no-gravity-elements/button/types';
// import type { IconProps } from '@no-gravity-elements/icon/types';
// import type { InfoBoxProps } from '@no-gravity-elements/info-box/types';
// import type { LinkProps } from '@no-gravity-elements/link/types';
// import type { TypographyProps } from '@no-gravity-elements/typography/types';

// type ReactWebComponent =
//   | (Partial<HTMLElement> &
//       Partial<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>)
//   // @ts-ignore
//   | { children?: React.ReactNode };

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'nge-button': ButtonProps & ReactWebComponent;
//       'nge-card': ReactWebComponent;
//       'nge-icon': IconProps & ReactWebComponent;
//       'nge-link': LinkProps & ReactWebComponent;
//       'nge-typography': TypographyProps & ReactWebComponent;
//       'nge-info-box': InfoBoxProps & ReactWebComponent;
//     }
//   }
// }

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

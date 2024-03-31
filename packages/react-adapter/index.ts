// @ts-nocheck
import type { ButtonProps } from '@no-gravity-elements/button/types';
import type { IconProps } from '@no-gravity-elements/icon/types';
import type { InfoBoxProps } from '@no-gravity-elements/info-box/types';
import type { LinkProps } from '@no-gravity-elements/link/types';
import type { TypographyProps } from '@no-gravity-elements/typography/types';

type ReactWebComponent =
  | (Partial<HTMLElement> &
      Partial<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>)
  | { children?: React.ReactNode };

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nge-button': ButtonProps & ReactWebComponent;
      'nge-card': ReactWebComponent;
      'nge-icon': IconProps & ReactWebComponent;
      'nge-link': LinkProps & ReactWebComponent;
      'nge-typography': TypographyProps & ReactWebComponent;
      'nge-info-box': InfoBoxProps & ReactWebComponent;
    }
  }
}

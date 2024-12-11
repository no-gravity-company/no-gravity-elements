// @ts-nocheck
import type { ButtonProps } from '@no-gravity-elements/button/types';
import type { FooterProps } from '@no-gravity-elements/footer/types';
import type { IconProps } from '@no-gravity-elements/icon/types';
import type { LinkProps } from '@no-gravity-elements/link/types';
import type { TypographyProps } from '@no-gravity-elements/typography/types';
import type { InfoBoxProps } from '@no-gravity-elements/info-box/types';

export * from './hooks';

interface ReactWebComponent {
  children?: React.ReactNode;
  ref?: React.LegacyRef<HTMLElement>;
  key?: React.Key | null;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'nge-button': ButtonProps & ReactWebComponent;
      'nge-card': ReactWebComponent;
      'nge-footer': FooterProps & ReactWebComponent;
      'nge-header': ReactWebComponent;
      'nge-icon': IconProps & ReactWebComponent;
      'nge-link': LinkProps & ReactWebComponent;
      'nge-typography': TypographyProps & ReactWebComponent;
      'nge-info-box': InfoBoxProps & ReactWebComponent;
      'nge-section': ReactWebComponent;
    }
  }
}

// @ts-nocheck
import type { ButtonProps } from '@no-gravity-elements/button/types';
import type { FooterProps } from '@no-gravity-elements/footer/types';
import type { IconProps } from '@no-gravity-elements/icon/types';
import type { LinkProps } from '@no-gravity-elements/link/types';
import type { TypographyProps } from '@no-gravity-elements/typography/types';
import type { BannerCtaProps } from '@no-gravity-elements/banner-cta/types';
import type { InfoBoxProps } from '@no-gravity-elements/info-box/types';
import type { Page404Props } from '@no-gravity-elements/page404/types';

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
      'nge-banner-cta': BannerCtaProps & ReactWebComponent;
      'nge-info-box': InfoBoxProps & ReactWebComponent;
      'nge-page404': Page404Props & ReactWebComponent;
      'nge-section': ReactWebComponent;
    }
  }
}

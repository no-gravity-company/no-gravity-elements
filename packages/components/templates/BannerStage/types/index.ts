import { StringBoolean } from '@no-gravity-elements/types';

export interface BannerStageProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  videoSrc?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: string;
  variant?: string;
  theme?: string;
  overlayOpacity?: string;
  autoplay?: StringBoolean;
  disabled?: StringBoolean;
  loading?: StringBoolean;
}
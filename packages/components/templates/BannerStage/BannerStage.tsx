import { FunctionComponent, h } from 'preact';
import classNames from 'classnames';
import { StringBoolean } from '@no-gravity-elements/types';
import { BannerStageProps } from './types';
import './BannerStage.modules.scss';

/**
 * <nge-banner-stage>
 *
 * BannerStage component, highly customizable banner for hero, promo, or standard stages.
 *
 * @element nge-banner-stage
 *
 * @prop {string} [title] - Main title text
 * @prop {string} [subtitle] - Subtitle text
 * @prop {string} [description] - Description text
 * @prop {string} [backgroundImage] - URL for background image
 * @prop {string} [videoSrc] - URL for background video
 * @prop {string} [ctaText] - Call to action button text
 * @prop {string} [ctaHref] - CTA button href (renders as link)
 * @prop {string} [ctaVariant] - CTA button variant (primary, secondary, etc.)
 * @prop {string} ['standard'|'hero'|'promo'] [variant] - Banner size variant
 * @prop {string} ['light'|'dark'] [theme] - Color theme
 * @prop {string} ['0.5'] [overlayOpacity] - Overlay opacity (0-1)
 * @prop {StringBoolean} [autoplay] - Autoplay video background
 * @prop {StringBoolean} [disabled] - Disable CTA button
 * @prop {StringBoolean} [loading] - Loading state for CTA button
 *
 * @slot - Additional content inside the banner
 *
 * @cssproperty --overlay-opacity - Overlay opacity value
 *
 * @example
 * <nge-banner-stage title="Hero Title" variant="hero" background-image="https://example.com/bg.jpg" cta-text="Get Started" cta-href="/start">
 *   <p>Extra content</p>
 * </nge-banner-stage>
 */

const BannerStage: FunctionComponent<BannerStageProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    backgroundImage,
    videoSrc,
    ctaText,
    ctaHref,
    ctaVariant,
    variant = 'standard',
    theme = 'dark',
    overlayOpacity = '0.5',
    autoplay = StringBoolean.FALSE,
    disabled = StringBoolean.FALSE,
    loading = StringBoolean.FALSE,
    ...rest
  } = props;

  const parsedOverlayOpacity = parseFloat(overlayOpacity) || 0.5;
  const hasOverlay = parsedOverlayOpacity > 0;
  const hasVideo = !!videoSrc;
  const hasBackgroundImage = !!backgroundImage;
  const isAutoplay = autoplay === StringBoolean.TRUE;
  const isDisabled = disabled === StringBoolean.TRUE || loading === StringBoolean.TRUE;

  const bannerClass = classNames(
    'nge-banner-stage',
    `variant-${variant}`,
    `theme-${theme}`,
    {
      'has-overlay': hasOverlay,
      'has-video': hasVideo,
    }
  );

  return (
    <section className={bannerClass} style={{ '--overlay-opacity': parsedOverlayOpacity } as any} {...rest}>
      {hasVideo && (
        <video
          className="bg-video"
          src={videoSrc}
          autoPlay={isAutoplay}
          muted
          loop
          playsInline
        />
      )}
      {hasBackgroundImage && !hasVideo && (
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${backgroundImage})` } as any}
        />
      )}
      {hasOverlay && <div className="overlay" />}
      <div className="content">
        {title && <h1 className="title">{title}</h1>}
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        {description && <p className="description">{description}</p>}
        <div className="cta">
          {ctaText && (
            <nge-button
              value={ctaText}
              href={ctaHref || undefined}
              variant={ctaVariant || 'primary'}
              disabled={isDisabled ? StringBoolean.TRUE : StringBoolean.FALSE}
              loading={loading}
            />
          )}
        </div>
        <slot />
      </div>
    </section>
  );
};

BannerStage.observedAttributes = [
  'title',
  'subtitle',
  'description',
  'backgroundImage',
  'videoSrc',
  'ctaText',
  'ctaHref',
  'ctaVariant',
  'variant',
  'theme',
  'overlayOpacity',
  'autoplay',
  'disabled',
  'loading',
];

export default BannerStage;
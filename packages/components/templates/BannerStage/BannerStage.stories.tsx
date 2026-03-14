import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '@no-gravity-elements/banner-stage';
import '@no-gravity-elements/button';

type CustomArgs = {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  videoSrc: string;
  ctaText: string;
  ctaHref: string;
  ctaVariant: string;
  variant: 'standard' | 'hero' | 'promo';
  theme: 'light' | 'dark';
  overlayOpacity: number;
  autoplay: boolean;
  disabled: boolean;
  loading: boolean;
};

const meta: Meta<CustomArgs> = {
  title: 'templates/BannerStage',
  component: 'nge-banner-stage',
  parameters: {
    webComponents: {
      tagName: 'nge-banner-stage',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title text',
      defaultValue: 'Banner Stage Title',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle text',
      defaultValue: 'Your subtitle here',
    },
    description: {
      control: 'text',
      description: 'Description text',
      defaultValue: '',
    },
    backgroundImage: {
      control: 'text',
      description: 'Background image URL',
      defaultValue: '',
    },
    videoSrc: {
      control: 'text',
      description: 'Background video URL',
      defaultValue: '',
    },
    ctaText: {
      control: 'text',
      description: 'CTA button text',
      defaultValue: 'Get Started',
    },
    ctaHref: {
      control: 'text',
      description: 'CTA href',
      defaultValue: '',
    },
    ctaVariant: {
      control: 'text',
      description: 'CTA variant',
      defaultValue: 'primary',
    },
    variant: {
      control: 'select',
      options: ['standard', 'hero', 'promo'],
      description: 'Banner variant',
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Theme',
    },
    overlayOpacity: {
      control: 'range',
      min: 0,
      max: 1,
      step: 0.1,
      description: 'Overlay opacity',
      defaultValue: 0.5,
    },
    autoplay: {
      control: 'boolean',
      description: 'Autoplay video',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable CTA',
    },
    loading: {
      control: 'boolean',
      description: 'Loading CTA',
    },
  },
  render: ({
    title,
    subtitle,
    description,
    backgroundImage,
    videoSrc,
    ctaText,
    ctaHref,
    ctaVariant,
    variant,
    theme,
    overlayOpacity,
    autoplay,
    disabled,
    loading,
  }) => html`
    <style>
      :root {
        --nge-button-padding: 12px 24px;
        --nge-button-border-radius: 8px;
      }
    </style>
    <nge-banner-stage
      title="${title}"
      subtitle="${subtitle}"
      description="${description}"
      background-image="${backgroundImage}"
      video-src="${videoSrc}"
      cta-text="${ctaText}"
      cta-href="${ctaHref}"
      cta-variant="${ctaVariant}"
      variant="${variant}"
      theme="${theme}"
      overlay-opacity="${overlayOpacity}"
      autoplay="${autoplay ? 'true' : 'false'}"
      disabled="${disabled ? 'true' : 'false'}"
      loading="${loading ? 'true' : 'false'}"
    >
      <div style="margin-top: 20px; font-size: 1rem;">Custom slot content</div>
    </nge-banner-stage>
  `,
};

export default meta;
type Story = StoryObj<CustomArgs>;

export const Default: Story = {
  args: {
    title: 'Default Banner',
    subtitle: 'Standard subtitle',
    variant: 'standard',
    theme: 'dark',
    overlayOpacity: 0.5,
  },
};

export const HeroLarge: Story = {
  args: {
    title: 'Hero Banner',
    subtitle: 'Large hero with big impact',
    description: 'Full description for hero section.',
    backgroundImage: 'https://via.placeholder.com/1920x1080/0066cc/ffffff?text=Hero+BG',
    ctaText: 'Learn More',
    variant: 'hero',
    theme: 'dark',
    overlayOpacity: 0.4,
  },
};

export const PromoSmall: Story = {
  args: {
    title: 'Promo Banner',
    subtitle: 'Small promo callout',
    ctaText: 'Shop Now',
    ctaVariant: 'secondary',
    variant: 'promo',
    theme: 'light',
    overlayOpacity: 0.3,
  },
};

export const ImageBackground: Story = {
  args: {
    title: 'Image Background',
    subtitle: 'With custom image',
    backgroundImage: 'https://via.placeholder.com/1920x600/28a745/ffffff?text=Promo+Image',
    ctaText: 'Action',
    ctaHref: '#',
    variant: 'standard',
  },
};

export const VideoBackgroundAutoplay: Story = {
  args: {
    title: 'Video Background',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    autoplay: true,
    ctaText: 'Watch Video',
    variant: 'hero',
    overlayOpacity: 0.6,
  },
};

export const WithPrimaryCTA: Story = {
  args: {
    title: 'Primary CTA',
    ctaText: 'Primary Button',
    ctaVariant: 'primary',
    variant: 'promo',
  },
};

export const WithSecondaryCTA: Story = {
  args: {
    title: 'Secondary CTA',
    ctaText: 'Secondary Button',
    ctaVariant: 'secondary',
    variant: 'promo',
  },
};

export const DarkOverlay: Story = {
  args: {
    title: 'Dark Overlay',
    backgroundImage: 'https://via.placeholder.com/1920x600/cc0000/ffffff?text=Dark+Overlay',
    overlayOpacity: 0.8,
    theme: 'dark',
  },
};

export const LightTheme: Story = {
  args: {
    title: 'Light Theme',
    backgroundImage: 'https://via.placeholder.com/1920x600/ffc107/000000?text=Light+Theme',
    theme: 'light',
    overlayOpacity: 0.2,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    ctaText: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    title: 'Loading',
    ctaText: 'Loading Button',
    loading: true,
  },
};
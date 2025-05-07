export default {
  title: 'No Gravity Elements',
  description: 'Biblioteca de componentes web',
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Componentes', link: '/components/' },
      { text: 'Guía', link: '/guide/' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Átomos',
          items: [
            { text: 'Button', link: '/components/atoms/button' },
            { text: 'Icon', link: '/components/atoms/icon' },
            { text: 'Typography', link: '/components/atoms/typography' },
          ],
        },
        {
          text: 'Moléculas',
          items: [
            { text: 'InfoBox', link: '/components/molecules/info-box' },
            { text: 'BannerCta', link: '/components/molecules/banner-cta' },
          ],
        },
      ],
      '/guide/': [
        {
          text: 'Guía',
          items: [
            { text: 'Introducción', link: '/guide/' },
            { text: 'Instalación', link: '/guide/installation' },
            { text: 'Uso', link: '/guide/usage' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/no-gravity-company/no-gravity-elements' },
    ],
  },
}; 
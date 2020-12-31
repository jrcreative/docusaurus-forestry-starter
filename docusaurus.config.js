module.exports = {
  title: 'VanDev Knowledge Base',
  tagline: 'Docs and process for VanDevs',
  url: 'https://vandev.ndvr.site',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'jrcreative', // Usually your GitHub org/user name.
  projectName: 'docusaurus-forestry-starter', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VanDevs Docs',
      logo: {
        alt: 'Van Dev Logo',
        src: 'img/vandevlogo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/jrcreative/docusaurus-forestry-starter',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '79fcd0882d08a9e2cc91fe63aa949d2d',
      indexName: 'vandevs',

      // Optional: see doc section bellow
      contextualSearch: false,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vandevs',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/vandevs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vandevs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jrcreative/docusaurus-forestry-starter',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Van Devs Docs. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jrcreative/docusaurus-forestry-starter/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jrcreative/docusaurus-forestry-starter/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

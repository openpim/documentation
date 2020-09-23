const { description } = require('../../package')

module.exports = {
  base: "/docs/admin/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Administrator Guide',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#1565c0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Read',
        link: '/guide/',
      }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            '01_DataModel.md',
            '02_ImportExport',
            '03_Actions',
            '04_UserManagement',
            '05_Dashboards',
            '06_Appendix'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-176144928-1' // UA-00000000-0
      }
    ]
  ]
}

// module.exports = {
//   extend: '@vuepress/theme-default',
//   plugins: [
//     [
//       (pluginOptions, context) => ({
//         // name: 'my-xxx-plugin'
//         // // ... the rest of options
//       })
//     ],
//     ['vuepress-plugin-zooming'],
//   ]
// }

// module.exports = (options, ctx) => {

//   return {
//     extend: '@vuepress/theme-default',
//     plugins: [
//       ['vuepress-plugin-zooming'],
//       [
//         // includes all files in `sourceDir`
//         // ignore dotfiles and markdown
//         'vuepress-plugin-public-files', {
//           from: 'files',
//           to: 'files',
//         }
//       ],
//     ],
//   }
// }

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx

  return {
    name: 'vuepress-theme-devbit',
    // extend: '@vuepress/theme-default',
    plugins: [
      ['vuepress-plugin-zooming'],
      [
        // includes all files in `sourceDir`
        // ignore dotfiles and markdown
        'vuepress-plugin-public-files', {
          from: 'files',
          to: 'files',
        }
      ],
    ]
  }
}
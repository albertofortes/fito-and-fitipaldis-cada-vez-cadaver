var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Applications/MAMP/htdocs/freelanceos/warnermusic/WMS/2021/fitofitipaldis/cadavezcadaver-landing/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Applications/MAMP/htdocs/freelanceos/warnermusic/WMS/2021/fitofitipaldis/cadavezcadaver-landing/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Applications/MAMP/htdocs/freelanceos/warnermusic/WMS/2021/fitofitipaldis/cadavezcadaver-landing/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Applications/MAMP/htdocs/freelanceos/warnermusic/WMS/2021/fitofitipaldis/cadavezcadaver-landing/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Fito & Fitipaldis","short_name":"Fito & Fitipaldis web oficial","start_url":"/","background_color":"#000","theme_color":"#000","display":"standalone","icon":"src/images/warner-icon.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":"af4204d254e7c33babb70acc1667fea8"},
    },{
      name: 'gatsby-plugin-google-fonts',
      plugin: require('/Applications/MAMP/htdocs/freelanceos/warnermusic/WMS/2021/fitofitipaldis/cadavezcadaver-landing/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["Work+Sans:300,300i,400,400i,700"],"display":"swap"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}

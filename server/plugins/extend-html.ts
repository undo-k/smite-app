export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => { 
      // This will be an object representation of the html template.
      html.htmlAttrs.push(` data-theme="dark"`)
    })
  })
  
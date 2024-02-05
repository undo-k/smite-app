// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: false},
    app: {
        head: {
            charset: "UTF-8",
            viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
            title: "Smite INFO",
            // link: [{rel: "stylesheet", href: "./assets/main.css"}]
        },
    },
    css: ['~/assets/css/main.css'],
})

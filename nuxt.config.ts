import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    srcDir: 'src/',
    modules: [
        '@nuxt/content'
    ],
    content: {
        highlight: {
            theme: "github-light"
        }
    }
})

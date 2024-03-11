import '@mdi/font/css/materialdesignicons.css'
import { fa } from 'vuetify/locale'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from "vuetify/lib/iconsets/mdi";
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    // locale: {
    //     locale: 'fa',
    //     messages: { fa  },
    //   },
    //   theme: {
    //     defaultTheme: 'light  '
    // },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
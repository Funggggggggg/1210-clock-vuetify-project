/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
// 一包東西，動起來的樣子
import vuetify from './vuetify'
// 放儲存的資料
import pinia from '@/stores'
import router from '@/router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}

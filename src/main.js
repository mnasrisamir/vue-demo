import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/theme/utilities/font-awesome-icons-library'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Tabs from 'vue-tabs-component'
import AudioPlayer from '@liripeng/vue-audio-player'

import './app.scss'

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(Tabs)
    .use(AudioPlayer)
    .use(router)
    .mount('#app')

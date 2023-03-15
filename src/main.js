import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faChevron } from '@fortawesome/free-regular-svg-icons'

library.add(faSearch)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faWrench, faMugSaucer, faCubes, faLaptop,  } from '@fortawesome/free-solid-svg-icons'
import { faApple, faMicrosoft, faAndroid } from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faFile, faMugSaucer, faCubes, faLaptop, faWrench, faApple, faMicrosoft, faAndroid)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

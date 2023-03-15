import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faSearch, faRobot, faDesktop, faRightLong, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAppleWhole, faWrench, faMugSaucer, faCubes, faLaptop, faFileLines } from '@fortawesome/free-solid-svg-icons'
// import {faMicrosoft} from '@fortawesome/free-brands-svg-icons'

library.add(faSearch, faFileLines, faMugSaucer, faCubes, faLaptop,
     faWrench, faAppleWhole, faDesktop, faRobot, faRightLong, faAngleRight)


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

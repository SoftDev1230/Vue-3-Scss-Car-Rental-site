import './assets/main.css'
import 'primeicons/primeicons.css';
import VueGoogleMaps from '@fawmi/vue-google-maps';

import { createApp } from 'vue'
import App from './App.vue'
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faBookOpen } from '@fortawesome/free-solid-svg-icons';
// import { faFire } from '@fortawesome/sharp-light-svg-icons'
import { createModal } from '@kolirt/vue-modal';
import router from './router'
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

library.add(faUser, faClock, faBookOpen)
const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(createModal({
  transitionTime: 200,
  animationType: 'slideUp',
  modalStyle: {
    padding: '2rem 1rem'
  },
  overlayStyle: {
    'background-color': 'rgba(0,0,0,.3)'
  }
}))

app.use(router)
// app.component('VueDatePicker', VueDatePicker)  ssssssss

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAWEu6P2L81iTQ6QPw7-I71Ug8TMyEjy_I',
  },
}).mount('#app');

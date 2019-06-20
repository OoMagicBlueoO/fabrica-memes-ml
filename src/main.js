import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'
import { firestorePlugin } from 'vuefire'
import router from './routes/index.js'
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA2AVfbSm65i81ISx0huasfCEgKvhY_-jg",
  authDomain: "fabrica-memes-mb.firebaseapp.com",
  databaseURL: "https://fabrica-memes-mb.firebaseio.com",
  projectId: "fabrica-memes-mb",
  storageBucket: "fabrica-memes-mb.appspot.com",
  messagingSenderId: "36074568468",
  appId: "1:36074568468:web:fdf964f2796c605e"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const firestore = firebaseApp.firestore()
export const storage = firebaseApp.storage().ref('/images')
Vue.use(firestorePlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

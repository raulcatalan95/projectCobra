import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Element UI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// Bootstrap Vue

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

// FirebaseConfig
import Firebase from 'firebase'

const FirebaseConfig = {
  apiKey: "AIzaSyB5hxSjg_H7Ki2U_7CJU2jRbRA-1GIWLwo",
  authDomain: "project01-8f442.firebaseapp.com",
  databaseURL: "https://project01-8f442.firebaseio.com",
  projectId: "project01-8f442",
  storageBucket: "project01-8f442.appspot.com",
  messagingSenderId: "121800642711",
  appId: "1:121800642711:web:475ae0836ce3c800d859d2",
  measurementId: "G-42DEKNE9JX"
};
Firebase.initializeApp(FirebaseConfig);
Firebase.analytics();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

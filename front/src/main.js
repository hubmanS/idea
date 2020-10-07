import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "vuetify";
import firebase from "firebase";
import { firestorePlugin } from "vuefire";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VuejsDialog from "vuejs-dialog";

// include the default style
import "vuejs-dialog/dist/vuejs-dialog.min.css";

// Tell Vue to install the plugin.
Vue.use(VuejsDialog);

Vue.use(vuetify);
Vue.use(firebase);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify: new vuetify(),
  render: h => h(App)
}).$mount("#app");

export default new vuetify({
  icons: {
    iconfont: "md"
  }
});

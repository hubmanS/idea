import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "vuetify";
import firebase from "firebase";
import { firestorePlugin } from "vuefire";
import "vuetify/dist/vuetify.min.css"; //archivo css de vuetify
//el siguente linea es para incluir los iconos de material designer
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VuejsDialog from "vuejs-dialog";

// include the default style css
import "vuejs-dialog/dist/vuejs-dialog.min.css";

// Tell Vue to install the plugin(decimos a vue que debe utilizarlos).
Vue.use(VuejsDialog);
Vue.use(vuetify);
Vue.use(firebase);
Vue.use(firestorePlugin);
Vue.config.productionTip = false;
/*creamos una instancia Vue y dentro del constructor pasamos el objeto de
configuracion,
"Con la instancia Vue creamos nuestro gran sistema de aplicacion"*/
new Vue({
  router,
  store,
  vuetify: new vuetify(),
  render: h => h(App) //renderizamos(generar IU) la plantilla del archivo App.vue
}).$mount("#app"); //montamos en el id=app del div del archivo index.htm

export default new vuetify({
  icons: {
    iconfont: "md"
  }
});

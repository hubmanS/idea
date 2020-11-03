<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Blog
          </v-list-item-title>
          <v-list-item-subtitle>tu blog dije</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue">
      <!--se mostrara la barra superior de la aplicacion de color blue-->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter 
      el contenido se cambiara dependiendo del sitio o pagina en la que
      queremos estar ubicados-->
      <v-container fluid>
        <router-view>
          <!--router-view va mostrar las difrents pantllas dentro
        la estructura de maquetacion definida, todo esto dentro 
        del recuadro definido por el elemento container
        
        Es el espacio que usará nuestro sistema para cargar cada una
         de las páginas solicitadas, según nuestro ejemplo: Home, 
          About y Contact.-->
        </router-view>
      </v-container>
    </v-main>

    <v-footer app color="blue">
      <!--pie de pagina -->
    </v-footer>
  </v-app>
</template>
<script>
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCzHaTR9KIplQeOYG7YVr4awCGNxPugAkI",
  authDomain: "themes-3ef51.firebaseapp.com",
  databaseURL: "https://themes-3ef51.firebaseio.com",
  projectId: "themes-3ef51",
  storageBucket: "themes-3ef51.appspot.com",
  messagingSenderId: "204785390453",
  appId: "1:204785390453:web:78fc9232367f70dcb5b93c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  data() {
    return {
      //items es un arreglo
      items: [
        { title: "project 1", icon: "mdi-view-dashboard" },
        { title: "project 2", icon: "mdi-image" },
        { title: "project 3", icon: "mdi-help-box" }
      ],
      right: null
    };
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

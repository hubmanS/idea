import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

const db = firebase.firestore();
//le estamos diciendo a Vue que use Vuex
Vue.use(Vuex);

const GET_THEMES = (state, themes) => {
  state.themes = themes;
};
//esto es una funcion desde action
const ADD_THEME = (state, theme) => {
  const exist = state.themes.filter(currentTheme => currentTheme.title === theme.title);

  if (exist.length <= 0) {
    //el push theme lo que hace es actualizar el valor de los objetos del
    //arreglo theme[] que se encunetra en el archivo state.
    state.themes.push(theme);

    db.collection("themes")
      .add(theme)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }
};

const UPDATE_THEME = (state, theme) => {
  db.collection("themes")
    .doc(theme.id)
    .update(theme);

  state.themes.map(currentTheme => {
    if (currentTheme.id === theme.id) {
      currentTheme = theme;
    }
  });
};

const REMOVE_THEME = (state, theme) => {
  db.collection("themes")
    .doc(theme.id)
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
      state.themes = state.themes.filter(currentTheme => currentTheme.id !== theme.id);
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
};

export default {
  GET_THEMES,
  ADD_THEME,
  UPDATE_THEME,
  REMOVE_THEME
};

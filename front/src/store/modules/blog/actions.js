import { types } from "./state";
import firebase from "firebase";

const getThemesList = async ({ commit }) => {
  const snapshot = await firebase
    .firestore()
    .collection("themes")
    .get();

  const promiseThemes = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  commit(types.GET_THEMES, promiseThemes);
};

const addTheme = ({ commit }, { type, title, description }) => {
  commit(types.ADD_THEME, {
    type,
    title,
    description
  });
};

const removeTheme = ({ commit }, { id, type, title, description }) => {
  commit(types.REMOVE_THEME, {
    id,
    type,
    title,
    description
  });
};

const editTheme = ({ commit }, { id, title, type, description }) => {
  commit(types.UPDATE_THEME, {
    id,
    title,
    type,
    description
  });
};

export default {
  getThemesList,
  addTheme,
  removeTheme,
  editTheme
};

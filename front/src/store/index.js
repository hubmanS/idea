import Vuex from "vuex";
import module1 from "./modules/blog";

//creamos nuestros estados
const createStore = () => {
  return new Vuex.Store({
    modules: {
      module1: module1
    }
  });
};

export default createStore;

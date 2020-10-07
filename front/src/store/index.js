import Vuex from "vuex";
import module1 from "./modules/blog";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      module1: module1
    }
  });
};

export default createStore;

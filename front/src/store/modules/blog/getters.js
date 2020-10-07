import { SPORTS } from "@/store/constants";

const themesList = state => {
  return state.themes;
};

const getTypesCategories = () => {
  return {
    typeOptions: [
      { value: SPORTS.SPORT1, label: "sport 1" },
      { value: SPORTS.SPORT2, label: "sport 2" },
      { value: SPORTS.SPORT3, label: "sport 3" }
    ]
  };
};

export default {
  themesList,
  getTypesCategories
};

<template>
  <v-container>
    <v-layout>
      <v-flex>
        <span v-if="state.currentPage == 'list'">
          <span>My Themes</span>
          <v-btn color="success" @click="changeState()">New Theme</v-btn>
          <list-Theme />
        </span>

        <span v-if="state.currentPage != 'list'">
          <v-btn color="default" @click="changeState()">Cancel</v-btn>
          <v-btn color="success" @click="addTheme(typeTheme), changeState()">Create</v-btn>
          <v-col cols="2">
            <v-select
              v-model="typeTheme.type"
              :items="getTypesCategories.typeOptions"
              item-value="label"
              item-text="label"
              label="Themes"
            />
            <v-text-field v-model="typeTheme.title" color="success" placeholder="Title" />
            <v-text-field
              v-model="typeTheme.description"
              color="success"
              placeholder="Description"
            />
          </v-col>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { SPORTS } from "@/store/constants";

import firebase from "firebase";
const db = firebase.firestore();
import ListTheme from "./ListTheme.vue";
export default {
  name: "Create",
  components: {
    ListTheme
  },
  data() {
    return {
      state: {
        currentPage: "list"
      },
      typeTheme: {
        title: "",
        type: SPORTS.SPORT2,
        description: ""
      }
    };
  },
  firestore: {
    themes: db.collection("themes")
  },
  computed: {
    ...mapGetters(["getTypesCategories"])
  },
  methods: {
    changeState() {
      this.state.currentPage = this.state.currentPage == "list" ? "create" : "list";
    },
    ...mapActions(["addTheme"])
  }
};
</script>

<style></style>

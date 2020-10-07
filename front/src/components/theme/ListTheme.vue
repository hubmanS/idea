<template>
  <v-container>
    <Theme v-for="item in themesList" :key="item.title" :item="item" />
  </v-container>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Theme from "./Theme.vue";
export default {
  name: "ListTheme",
  components: {
    Theme
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["themesList"])
  },
  mounted() {
    this.getThemesList();
  },
  methods: {
    ...mapActions(["getThemesList"])
  }
};
</script>

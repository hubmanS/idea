<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ item.type }}</div>
        <v-list-item-title class="headline mb-1">{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey" />
    </v-list-item>

    <v-card-actions>
      <v-btn text @click="deleteTheme(item)">Delete</v-btn>
      <span>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="290">
            <template v-slot:activator="{}">
              <v-btn text @click="openDialog()">edit</v-btn>
              <span>
                <Update-Theme :dialog.sync="dialog" :item="item" :categories="getTypesCategories" />
              </span>
            </template>
          </v-dialog>
        </v-row>
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import "vuetify/dist/vuetify.min.css";
import UpdateTheme from "./UpdateTheme";
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default {
  name: "Theme",
  components: { UpdateTheme },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["getTypesCategories"])
  },
  mounted() {},
  methods: {
    deleteTheme(item) {
      this.$dialog
        .confirm("Please confirm to continue")
        .then(() => {
          this.removeTheme(item);
        })
        .catch(function() {
          console.log("Clicked on cancel");
        });
    },
    openDialog() {
      this.dialog = true;
    },
    ...mapActions(["removeTheme", "editTheme"])
  }
};
</script>
<style>
.form {
  margin: 20px;
}
</style>

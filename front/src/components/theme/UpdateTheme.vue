<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="390">
      <v-card>
        <v-card-title class="headline">Theme</v-card-title>
        <v-card-text>here change the attributes.</v-card-text>
        <div class="header">
          <v-select
            :items="categories.typeOptions"
            item-value="label"
            item-text="label"
            label="Themes"
          />
          <v-text-field v-model="item.title" color="success" placeholder="name" />
          <v-text-field
            v-model="item.description"
            color="success"
            placeholder="description"
          />
        </div>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" text @click="closeDialog()">Cancel</v-btn>
          <v-btn color="green darken-1" text @click="closeDialog(), changeTheme(item)">
            Change
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "UpdateTheme",
  props: ["dialog", "item", "categories"],
  data: () => ({
    getTypesCategories: {
      typeOptions: []
    }
  }),

  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
    changeTheme(item) {
      this.editTheme(item);
    },
    ...mapActions(["editTheme"])
  }
};
</script>

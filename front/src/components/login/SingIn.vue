<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title>BIENVENIDO A PSK</v-toolbar-title>
      <v-spacer />
      <v-btn text rounded>Home</v-btn>
      <v-btn text rounded>Login</v-btn>
      <v-btn text rounded>About</v-btn>
      <v-btn text rounded>Contact</v-btn>
    </v-app-bar>
    <v-content>
      <v-card width="500" class="mx-auto" mt-9>
        <v-card-title>USER LOGIN</v-card-title>
        <v-card-text>
          <v-text-field v-model="userName" label="User Name" prepend-icon="mdi-account-circle" />
          <v-text-field
            v-model="password"
            label="Password"
            :type="showPassword ? 'mdi-eye' : 'mdi-eye-on'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      userName: "",
      password: ""
    };
  }
};
</script>

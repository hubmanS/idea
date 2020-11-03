<template>
  <v-app>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title>BIENVENIDO A PSK</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-card width="500" class="mx-auto" mt-9>
        <v-card-title>REGISTRARSE COMO USUARIO</v-card-title>
        <v-card-text>
          <v-text-field v-model="name" label="Name" />
          <v-text-field v-model="lastname" label="Apellido" />
          <v-text-field v-model="email" label="correo" />
          <v-text-field
            v-model="password1"
            label="Password1"
            :type="showPassword ? 'mdi-eye' : 'mdi-eye-on'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            v-model="password2"
            label="Password2"
            :type="showPassword ? 'mdi-eye' : 'mdi-eye-on'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="success">Register</v-btn>
          <v-btn color="info">Cancelar</v-btn>
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
      name: "",
      lastname: "",
      email: "",
      password1: "",
      password2: ""
    };
  }
};
</script>

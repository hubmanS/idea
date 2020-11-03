<template>
  <!--Dentro del cuadro div se va renderizar la plantilla que se encuentra
  en la ruta del alias Create-->
  <div>
    <!--lo llamamos al componente creado en la parte de abajo el mismo
    lo que va hacer es renderizar el template CreateTheme.vue-->
    <Create />
    <!--this is a component-->
  </div>
</template>

<script>
// @ is an alias to /src
//importamos recursos para consumir o utilizar variables y funciones
// del archivo a importar
import Create from "@/components/theme/CreateTheme.vue";
//import Login from "@/components/login/Login.vue";
//exportamos para que el compomente pueda ser usado desde otro archivo js
export default {
  name: "Home",
  components: {
    //creamos un componente de nombre Create
    Create
  }
};
</script>

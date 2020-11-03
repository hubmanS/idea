<template>
  <div>
    <SingIn />
    <SingUp />
  </div>
</template>
<script>
import SingIn from "@/components/login/SingIn.vue";
import SingUp from "@/components/login/SingUp.vue";
export default {
  name: "Home",
  components: {
    //creamos un componente de nombre Create
    SingIn,
    SingUp
  }
};
</script>

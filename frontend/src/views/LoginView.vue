<template>
  <LoaderSpinnerCpt v-if="isLoading" />

  <LoginFormCpt />
  <FooterCpt />
</template>

<script>
import LoginFormCpt from "@/components/forms/LoginFormCpt.vue";
import FooterCpt from "@/components/FooterCpt.vue";
import { useUtilsStore } from "../stores/utilsStore.js";
export default {
  name: "LoginView",
  components: {
    LoginFormCpt,
    FooterCpt
  },
  computed: {
    isLoading() {
      const utilsStore = useUtilsStore();
      return utilsStore.getIsLoading;
    }
  }
}
</script>

<style scoped></style>
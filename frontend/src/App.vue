<template>
  <div :class="[currentRouter === 'login' ? 'application__login' : '', 'application']">
    <RouterView class="application__router__view" v-show="!isLoading" />
    <LoaderSpinnerCpt v-show="isLoading && currentRouter === !'login'" />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import LoaderSpinnerCpt from "@/components/LoaderSpinnerCpt.vue";
import { useUtilsStore } from "./stores/utilsStore";
import { useConnectedUserStore } from "./stores/connectedUserStore";
import router from "@/router";

export default {
  name: 'App',
  components: {
    RouterView,
    LoaderSpinnerCpt
  },
  computed: {
    isLoading() {
      const utilsStore = useUtilsStore();
      useConnectedUserStore();
      return utilsStore.getIsLoading;
    },
    currentRouter() {
      return router.currentRoute.value.name;
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.application__router__view {
  height: 100vh;
  display: flex;
  flex-direction: column;

}

.application__login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  border-radius: 30px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0px 10px 43.3px -12px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 1200px) {
  .application__login {
    width: 100%;
    box-shadow: none
  }
}
</style>

<template>
  <div>
    <HeaderCpt />
    <main class="main__layout">
      <DesktopNavigationCpt />

      <div class="main__layout__content">
        <RouterView class="router__layout__modal" />
        <div class="main__layout__modal__background" v-if="formName"> </div>
        <ModalFormLayoutCpt v-if="formName" />
      </div>

    </main>
    <FooterCpt />
    <MobileNavigationCpt />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import ModalFormLayoutCpt from "@/components/forms/ModalFormLayoutCpt.vue";
import DesktopNavigationCpt from "@/components/DesktopNavigationCpt.vue";
import MobileNavigationCpt from "@/components/MobileNavigationCpt.vue";
import { useUtilsStore } from "../stores/utilsStore.js";
import HeaderCpt from "@/components/HeaderCpt.vue";
import FooterCpt from "@/components/FooterCpt.vue";
export default {
  name: "LayoutView",
  components: {
    RouterView,
    ModalFormLayoutCpt,
    DesktopNavigationCpt,
    MobileNavigationCpt,
    HeaderCpt,
    FooterCpt
  },

  computed: {
    formName() {
      const utilsStore = useUtilsStore();
      return utilsStore.getFormName;
    }
  }

};
</script>
<style scoped>
.main__layout {
  display: flex;

  height: 100%;
}

.main__layout__content {
  display: flex;
  justify-content: center;
  position: relative;
}

.main__layout__modal__background {
  width: 100%;
  background-color: rgba(9, 9, 9, 0.653);
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  backdrop-filter: blur(1px);
}

.router__layout__modal {
  height: 100%;
}

@media screen and (min-width: 300px) {
  .main__layout__content{
    margin: 0 auto;
  }

  .dataTable_filter{
    margin: 0 auto
  }
}
</style>
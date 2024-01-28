<template>
  <nav class="mobilenavigation__nav">
    <button class="mobilenavigation__nav__button__clients"><router-link class="mobilenavigation__nav__link__clients"
        to="/clients">
        <img class="mobilenavigation__nav__link__clients__img" src="../assets/icons/users-solid.svg"
          alt="icone des clients" />
      </router-link></button>

    <button class="mobilenavigation__nav__button__clients-new" @click="openClientCreationModal">
      <img class="mobilenavigation__nav__button__clients__img-new" src="../assets/icons/user-plus-solid.svg" alt="" />
    </button>

    <button class="mobilenavigation__nav__button__commands">
      <router-link class="mobilenavigation__nav__link__commands" to="/commandes">
        <img class="mobilenavigation__nav__link__commands__img" src="../assets/icons/file-lines-solid.svg" alt="" />
      </router-link>
    </button>

    <button class="mobilenavigation__nav__button__commands-new" @click="openOrderCreationModal">
      <img class="mobilenavigation__nav__button__commands-new" src="../assets/icons/file-circle-plus-solid.svg" alt="" />
    </button>

    <button class="mobilenavigation__nav__button__account" @click="openEditConnectedUserAccount">
      <img class="mobilenavigation__nav__button__account" src="../assets/icons/user-gear-solid.svg" alt="" />
    </button>
  </nav>
</template>

<script>
import { useUtilsStore } from "@/stores/utilsStore";
export default {
  name: "MobileNavigationCpt",
  data() {
    return {
      utilsStore : useUtilsStore(),
    };
  },
  methods: {
    openEditConnectedUserAccount() {
      this.utilsStore.setFormName("Modification du compte");
    },
    openClientCreationModal() {
      this.utilsStore.setFormName("Création d'un client");
    },
    openOrderCreationModal() {
      this.utilsStore.setFormName("Création de commande");
    }
  },
};
</script>
<style>
.mobilenavigation__nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: .4em;
}

.mobilenavigation__nav button {
  padding: .9em 1em;
  border: none;
  border-radius: 8px;
  background-color: transparent;
}

.mobilenavigation__nav img {
  width: 1.5em;
  height: 1.5em;
}

.mobilenavigation__nav button:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.mobilenavigation__nav button::before {
  transform: scaleX(0);
  transform-origin: bottom right;
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  inset: 0 0 0 0;
  background: #E99A0D;
  z-index: -1;
  transition: transform .3s ease;
  border-radius: 5px;
}

.mobilenavigation__nav button {
  position: relative;

}

@media screen and (min-width: 1000px) {
  .mobilenavigation__nav{
    display: none;
  }
}
</style>
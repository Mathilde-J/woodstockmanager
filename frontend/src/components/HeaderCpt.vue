<template>
  <header class="headerlayout">
    <img class="headerlayout__img" src="../assets/logoWoodStockManager.png" alt="">
    <div class="headerlayout__account__buttons">
      <button @click="openEditConnectedUserAccount" class="btn btn-primary headerlayout__account__buttons__useraccount"
        type="button">Mon compte</button>
      <button @click="logout" class="btn btn-danger headerlayout__account__buttons__logout" type="button">
        Deconnexion
      </button>
      <button @click="logout" class="btn btn-danger headerlayout__account__buttons__logout__mobile" type="button">
        <img src="../assets/icons/arrow-right-from-bracket-solid.svg" alt="">
      </button>
    </div>
  </header>
</template>

<script>
import { useUtilsStore } from "@/stores/utilsStore";
import { useAuthenticationStore } from "@/stores/authenticationStore";

export default {
  name: "HeaderCpt",
  data() {
    return {};
  },
  methods: {
    openEditConnectedUserAccount() {
      const utilsStore = useUtilsStore();
      utilsStore.setFormName("Modification du compte");
    },
    logout() {
      const authenticationStore = useAuthenticationStore();
      authenticationStore.logoutAction();
    }
  },
};
</script>

<style>
.headerlayout {
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem 1rem 1.8rem;
}

.headerlayout__img {
  width: 9em;

}

.headerlayout__account__buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.headerlayout__account__buttons__useraccount,
.headerlayout__account__buttons__logout {
  cursor: pointer;
  margin: .5rem 0;
  border-radius: 2rem;
  padding: .3rem .8rem;
  font-size: .7rem;
  font-family: 'Clowey', sans-serif;
  font-weight: 600;
  height: 42px;
  width: fit-content;
  min-width: 150px;
  align-self: center;
  transition: .2s;
  color: #fff;
}

.headerlayout__account__buttons__useraccount {
  border: solid 2px #bd9855;
  background-color: #bd9855;
}

.headerlayout__account__buttons__useraccount:hover {
  background-color: #fff;
  color: #bd9855;
  border: 2px solid #bd9855;
}

.headerlayout__account__buttons__logout {
  border: solid 2px #e14e5c;
  background-color: #e14e5c;
}

.headerlayout__account__buttons__logout:hover {
  background-color: #fff;
  color: #e14e5c;
  border: 2px solid #e14e5c;
}

button.headerlayout__account__buttons__logout__mobile {
  background-color: #bd9855;
  border: none;
  display: none;
}

@media screen and (max-width: 1000px) {

  .headerlayout__account__buttons button.headerlayout__account__buttons__useraccount,
  button.headerlayout__account__buttons__logout {
    display: none;
  }

  button.headerlayout__account__buttons__logout__mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8em;
  }

  button.headerlayout__account__buttons__logout__mobile img {
    width: 1em;
  }

  .headerlayout {
    padding: 1rem 2rem 1rem 1.8rem;
  }
}
</style>
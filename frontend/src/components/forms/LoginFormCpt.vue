<template>
  <LoaderSpinnerCpt v-if="isLoading" />
  <div v-else class="blocklogin">
    <p v-show="succes">{{ succes }}</p>
    <header class="blocklogin__header">
      <img src="../../assets/logoWoodStockManager.png" class="blocklogin__header__logo" alt="logo">
    </header>

    <form @submit.prevent="loginSubmit" class="blocklogin__form">
      <p class="form__field__error" v-show="errors.errorMessage">{{ errors.errorMessage }}</p>
      <div class="form__field">
        <label for="loginEmail">Email*</label>
        <input id="loginEmail" class="form__field__input" autocomplete @change="onChangeEmail" type="text" :value="email">
      </div>
      <div class="form__field">
        <label for="loginPassword">Password*</label>
        <input id="loginPassword" class="form__field__input" autocomplete @change="onChangePassword" type="password"
          :value="password">
      </div>

      <div class="form__field">
        <button class="form__field__submit" type="submit">Connexion</button>
      </div>

    </form>
  </div>
</template>

<script>
import router from "@/router";
import { useAuthenticationStore } from "@/stores/authenticationStore";
import { useUtilsStore } from "@/stores/utilsStore";
import LoaderSpinnerCpt from "@/components/LoaderSpinnerCpt.vue";
export default {
  name: "LoginFormCpt",
  components: {
    LoaderSpinnerCpt
  },
  data() {
    return {
      utilsStore: useUtilsStore(),
    }
  },
  updated() {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged) {
      router.push("/commandes");
    }
  },
  computed: {
    succes() {
      const utilsStore = useUtilsStore();
      return utilsStore.getSucces;
    },
    email() {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.getEmailValue;
    },
    password() {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.getPasswordValue;
    },
    errors() {
      return this.utilsStore.getErrors;
    },
    isLoading() {
      return this.utilsStore.getIsLoading;
    }
  },
  methods: {
    onChangeEmail(event) {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.setEmailValue(event.target.value);
    },
    onChangePassword(event) {
      const authenticationStore = useAuthenticationStore();
      return authenticationStore.setPasswordValue(event.target.value);
    },
    loginSubmit() {
      this.utilsStore.resetErrors();
      const authenticationStore = useAuthenticationStore();
      authenticationStore.loginAction();
    }
  }

};
</script>

<style scoped>


.form__field__error {
  color: red;
  text-align: left;
  font-size: .7rem;
}

.blocklogin__form {
  min-width: 250px;
  max-width: 400px;
  width: 50%;
  margin: auto;
}

label {
  text-align: left;
}

.form__field {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: .8rem 0;
}

.form__field__input {
  width: 100%;
  height: 1.6rem;
  border: none;
  background-color: rgb(241, 241, 241);
  border-radius: .2rem;
}

.form__field__submit {
  cursor: pointer;
  margin: .5rem 0;
  border: solid 2px #bd9855;
  border-radius: 2rem;
  padding: .3rem .8rem;
  font-size: 1rem;
  font-family: 'Clowey', sans-serif;
  font-weight: 600;
  height: 42px;
  margin-left: 1rem;
  background-color: #bd9855;
  color: #fff;
  width: fit-content;
  min-width: 150px;
  align-self: center;
  transition: .2s;
}

.form__field__submit:hover {
  background-color: #fff;
  color: #bd9855;
  border: 2px solid #bd9855;
}

.blocklogin__header img {
  max-width: 30em;
  width: 100%;
}
</style>

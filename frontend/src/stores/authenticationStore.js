import { defineStore } from "pinia";
import { useUtilsStore } from "./utilsStore";
import Axios from "../_services/callerService";
import router from "@/router";
export const useAuthenticationStore = defineStore("authentication", {
  state: () => ({
    email: "",
    password: "",
    isLoggedIn: false,
    utilsStore: useUtilsStore(),
  }),
  getters: {
    getEmailValue: (state) => {
      return state.email;
    },
    getPasswordValue: (state) => {
      return state.password;
    },
  },
  actions: {
    setEmailValue(email) {
      this.email = email;
    },
    setPasswordValue(password) {
      this.password = password;
    },
    async logoutAction() {
      try {
        this.utilsStore.toggleIsLoadingValue()
        await Axios.post(`/api/logout`).then((response) => {
          if (response?.status === 200) {
            this.isLoggedIn = false;
            if (localStorage.getItem('loggedIn')) {
              localStorage.removeItem('loggedIn');
              localStorage.removeItem('connectedUserId');
            }
            router.push("/login");
            this.utilsStore.setSuccesMessage('Déconnexion établie')
            this.utilsStore.resetSuccesMessage();
          }
        });
      } catch (error) {
        this.utilsStore.setErrorsResponse(error?.response?.status, error.response?.message);
      } finally {
        this.utilsStore.toggleIsLoadingValue()
      }
    },
    async loginAction() {
      try {
        this.utilsStore.toggleIsLoadingValue()
        await Axios.get(`sanctum/csrf-cookie`)
        const response = await Axios.post(`/api/login`, { email: this.email, password: this.password });
        if (response.data) {
          this.setEmailValue("");
          this.setPasswordValue("");
          this.isLoggedIn = true;
          localStorage.setItem('loggedIn', true);
          localStorage.setItem('connectedUserId', response.data.user.id);
          router.push("/commandes");
        }
      } catch (error) {
        this.utilsStore.setErrorsResponse(error?.response?.status, "Les identifiants ne sont pas valides");
      } finally {
        this.utilsStore.toggleIsLoadingValue();
      }
    },
  }
});
import { defineStore } from "pinia";
import { useUtilsStore } from "./utilsStore";
import Axios from "../_services/callerService";

export const useConnectedUserStore = defineStore("connectedUser", {
  state: () => ({
    updateUserForm: {
      userLastName: "",
      userFirstName: "",
      userEmail: "",
      userPhoneNumber: "",
    },
  }),
  getters: {
    getUpdateUserForm: (state) => {
      return state.updateUserForm;
    },
  },
  actions: {
    async getUserByIdAction() {
      const utilsStore = useUtilsStore();
      try {
        utilsStore.toggleIsLoadingValue();
        const connectedUserId = localStorage.getItem("connectedUserId");
        const response = await Axios.get(`/api/users/${connectedUserId}`);
        const connectedUser = response.data.user;
        this.updateUserForm = {
          userLastName: connectedUser.last_name,
          userFirstName: connectedUser.first_name,
          userEmail: connectedUser.email,
          userPhoneNumber: connectedUser.phone,
        };
      } catch (error) {
        utilsStore.setErrorsResponse(error?.response?.status, error?.response?.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
      }

    },
    async updateUserAction() {
      const utilsStore = useUtilsStore();
      try {
        utilsStore.toggleIsLoadingValue();
        const connectedUserId = localStorage.getItem("connectedUserId");
        console.log("🚀 ~ file: connectedUserStore.js:48 ~ updateUserAction ~ connectedUserId:", connectedUserId)
        const body = {
          "id": connectedUserId,
          "last_name": this.updateUserForm.userLastName,
          "first_name": this.updateUserForm.userFirstName,
          "email": this.updateUserForm.userEmail,
          "phone": this.updateUserForm.userPhoneNumber,
        };
        const response = await Axios.put(`/api/users/${connectedUserId}`, body);
        console.log(response);
        utilsStore.setSuccesMessage("Utilisateur modifié avec succès !");
        const connectedUser = response.data.user;
        this.updateUserForm = {
          userLastName: connectedUser.last_name,
          userFirstName: connectedUser.first_name,
          userEmail: connectedUser.email,
          userPhoneNumber: connectedUser.phone,
        };

        utilsStore.resetSuccesMessage();
      } catch (error) {
        utilsStore.setErrorsResponse(error?.response?.status, error?.response?.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
      }
    },
    setUpdateUserFormField(value, field) {
      this.updateUserForm[field] = value.replace(/\s/g, "");
    },
    resetform() {
      this.updateUserForm = {
        userLastName: "",
        userFirstName: "",
        userEmail: "",
        userPhoneNumber: "",
      }
    },
  }
});
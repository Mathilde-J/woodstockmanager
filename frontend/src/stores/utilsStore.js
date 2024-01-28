import { defineStore } from "pinia";
import { getErrorsObject } from "@/utils/getErrorObject.js";
import { regex } from '@/utils/formFields.js';
import { setErrorsFromResponseStatus } from "../utils/setErrorsFromResponseStatus.js";
import router from "@/router";

export const useUtilsStore = defineStore("utils", {
  state: () => ({
    formName: "",
    isLoading: false,
    errors: {
    },
    isErrors: false,
    succesMessage: ""
  }),
  getters: {
    getFormName: (state) => state.formName,
    getIsLoading: (state) => state.isLoading,
    getErrors: (state) => state.errors,
    getIsErrors: (state) => state.isErrors,
    getSucces: (state) => state.succesMessage
  },
  actions: {
    setFormName(formNameValue) {
      if (this.formName !== formNameValue) {
        this.errors = {};
      }
      this.formName = formNameValue;
    },
    toggleIsLoadingValue() {
      this.isLoading = !this.isLoading;
    },
    setErrorsForm(completeForm, fieldsOfForm) {
      this.errors = { ...getErrorsObject(completeForm, fieldsOfForm, regex) };
      if (Object.keys(this.errors).length === 0) {
        this.isErrors = false;
      } else {
        this.isErrors = true;
      }
    },
    setErrorsResponse(responseStatus, responseError) {
      this.errors = { errorMessage: setErrorsFromResponseStatus(responseStatus, responseError) };
      if (responseStatus === 401) {
        this.redirectToLogin();
      }
    },
    setSuccesMessage(message) {
      this.succesMessage = message;
    },
    resetErrors() {
      this.errors = {};
    },
    resetSuccesMessage() {
      setTimeout(() => { this.succesMessage = "" }, 5000)
    },
    redirectToLogin() {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('connectedUserId');
      router.push("/login");
    },
  }
});
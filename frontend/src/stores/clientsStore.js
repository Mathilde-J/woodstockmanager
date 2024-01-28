import { defineStore } from "pinia";
import { useUtilsStore } from "./utilsStore";
import { useOrdersStore } from "./ordersStore";
import Axios from "../_services/callerService";
import router from "@/router";

export const useClientsStore = defineStore("clients", {
  state: () => ({
    clients: [],
    singleClient: null,
    clientForm: {
      last_name: "",
      first_name: "",
      email: "",
      phone: "",
      billing_address: "",
      billing_zip_code: "",
      billing_city: "",
      delivery_address: "",
      delivery_zip_code: "",
      delivery_city: "",
      company_id: 1,
    },
  }),
  getters: {
    getClients: (state) => {
      return state.clients;
    },
    getclientForm: (state) => {
      return state.clientForm;
    },
    getSingleClientById: (state) => {
      return (clientId) => state.clients.find((client) => client.id === Number(clientId));
    },
    getSingleClient(state) {
      return state.singleClient;
    }
  },
  actions: {
    async getClientsAction() {
      const utilsStore = useUtilsStore();
      try {
        this.clients = [];
        utilsStore.toggleIsLoadingValue();
        const response = await Axios.get(`/api/clients`);
        response.data.client.forEach(client => {
          this.clients.push(client);
        });
      } catch (error) {
        utilsStore.setErrorsResponse(error?.response?.status, error?.response?.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
      }
    },
    async updateClientInStore(id) {
      let clientToBeUpdated;
      this.singleClient = {}
      if (this.clients.length > 0) {
        let clientToUpdate = this.getSingleClientById(id);
        if (!clientToUpdate) {
          await this.getClientById(id)
          this.clientForm = this.singleClient;
          return;
        }
        clientToBeUpdated = { ...clientToUpdate };
      }
      this.clientForm = clientToBeUpdated;
    },
    async submitUpdateClient() {
      const utilsStore = useUtilsStore();
      utilsStore.toggleIsLoadingValue();
      try {
        const response = await Axios.put(`api/clients/${this.clientForm.id}`, this.clientForm);
        if (response?.status === 200) {
          utilsStore.setSuccesMessage("Le client a été mis à jour !");
          this.clients = this.clients.filter((client) => client.id !== this.clientForm.id);
          this.clients.push(response?.data?.client)
          utilsStore.resetSuccesMessage();
          this.clientForm = response?.data?.client;
        }
      } catch (error) {
        utilsStore.setErrorsResponse(error?.response?.status, error?.response?.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
      }
    },
    async deleteClientAction(userIdToDelete) {
      const utilsStore = useUtilsStore();
      try {
        utilsStore.toggleIsLoadingValue();
        await Axios.delete(`/api/clients/${userIdToDelete}`);
        this.clients = this.clients.filter(client => client.id !== parseInt(userIdToDelete, 10));
      } catch (error) {
        utilsStore.setErrorsResponse(error?.response?.status, error?.response?.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
        router.push('/clients')
      }
    },
    async submitNewClient() {
      const utilsStore = useUtilsStore();
      try {
        utilsStore.toggleIsLoadingValue();
        const response = await Axios.post(`api/clients`, this.clientForm);
        if (response.status === 200) {
          utilsStore.setSuccesMessage("Un nouveau client a été créé !");
          this.resetform();
          utilsStore.resetSuccesMessage();
          utilsStore.setFormName("");
          this.clients = "";
          router.go("/clients");
        }
      } catch (error) {
        utilsStore.setErrorsResponse(error.response.status, error.response.data);
        if (error?.response?.status === 401) {
          utilsStore.redirectToLogin();
        }
      } finally {
        utilsStore.toggleIsLoadingValue();
      }
    },
    async getClientById(clientId) {
      const utilsStore = useUtilsStore();
      try {
        utilsStore.toggleIsLoadingValue();
        const response = await Axios.get(`/api/clients/${clientId}`);
        if (response.status === 200) {
          this.singleClient = response?.data?.client;
          useOrdersStore().setOrders(response.data?.client?.orders ?? [], this.singleClient.first_name);
        }
      } catch (error) {
        utilsStore.setErrorsResponse(error.response.status, error.response.data);
      } finally {
        utilsStore.toggleIsLoadingValue();
      }
    },
    setNewClient(value, field) {
      this.clientForm[field] = value;
    },
    resetform() {
      this.clientForm = {
        last_name: "",
        first_name: "",
        email: "",
        phone: "",
        billing_address: "",
        billing_zip_code: "",
        billing_city: "",
        delivery_address: "",
        delivery_zip_code: "",
        delivery_city: "",
        company_id: 1

      }
    },
  }
});
<template>
  <p v-show="succes">{{ succes }}</p>
    <p v-show="errors.errorMessage">{{ errors.errorMessage }}</p>
  <div class="clientpanelinfo card text-center">
    <div class="clientpanelinfo__list">
      <div class="card-header">
        Détails du client
      </div>
      <div class="card-body">
        <h5 :value="singleClient?.last_name" class="card-title">{{ singleClient?.last_name ?? "" }} {{
          singleClient?.first_name ?? "" }}</h5>
        <p :value="singleClient?.phone">Téléphone : {{ singleClient?.phone ?? "" }}</p>
        <p :value="singleClient?.email">Email : {{ singleClient?.email ?? "" }}</p>
        <p :value="singleClient?.billing_address + singleClient?.billing_zip_code + singleClient?.billing_city">addresse
          de facturation : {{ singleClient?.billing_address ?? "" + singleClient?.billing_zip_code ?? ""
            + ' ' +
            singleClient?.billing_city ?? "" }}</p>
        <p :value="singleClient?.delivery_address + singleClient?.delivery_zip_code + singleClient?.delivery_city">
          addresse de livraison : {{ singleClient?.delivery_address ?? "" }} {{ singleClient?.delivery_zip_code ?? "" }}
          {{ singleClient?.delivery_city ?? "" }}</p>
        <div class="clientpanelinfo__footer">
          <div class="clientpanelinfo__footer__buttons">
            <button type="submit" @click="updateClient(singleClient?.id)"
              class="btn btn-primary clientpanelinfo__footer__buttons__edit">Modifier</button>
            <button type="submit" @click="deleteClient(singleClient?.id)"
              class="btn btn-danger clientpanelinfo__footer__buttons__delete">Supprimer</button>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted">&nbsp;</div>
    </div>
  </div>
</template>

<script>
import { useClientsStore } from "@/stores/clientsStore";
import { useUtilsStore } from "@/stores/utilsStore";
export default {
  name: "ClientPanelInfoCpt",
  data() {
    return {
      clientStore: useClientsStore(),
      utilsStore: useUtilsStore()
    }
  },
  created() { },
  computed: {
    singleClient() {
      return this.clientStore.getSingleClient;
    },
    errors() {
      return this.utilsStore.getErrors;
    },
    succes() {
      return this.utilsStore.getSucces;
    }
  },
  methods: {
    updateClient(id) {
      this.utilsStore.setFormName("Modification d'un client");
      this.clientStore.updateClientInStore(id);
    },
    deleteClient(id) {
      this.clientStore.deleteClientAction(id);
    }
  }
};
</script>

<style scoped>
.clientpanelinfo {
  margin: 2rem;
}

.btn {
  margin: 0 1rem 0 1rem;
}</style>
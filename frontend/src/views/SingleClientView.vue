<template>
    <div>
        <ClientPanelInfoCpt></ClientPanelInfoCpt>
        <OrdersListCpt></OrdersListCpt>
    </div>
</template>

<script>
import ClientPanelInfoCpt from "@/components/ClientPanelInfoCpt.vue";
import OrdersListCpt from "@/components/dataTables/OrdersListCpt.vue";
import { useClientsStore } from "@/stores/clientsStore.js";

export default {
    name: "SingleClientView",
    components: {
        ClientPanelInfoCpt,
        OrdersListCpt
    },
    data() {
        return {
            clientStore : useClientsStore()
        }
    },
    created(){
      if(this.clientStore.singleClient === null || this.clientStore.singleClient.id !== this.$route.params.id){
        this.clientStore.getClientById(this.$route.params.id);
      }
    },
};
</script>

<template>
    <div class="formLayout">
        <header class="formLayout__header">
            <h1 class="formLayout__title">{{ formName }}</h1>
        </header>
        <button class="btn-close formLayout__closebutton" @click="closeModal"></button>

        <ClientFormCpt v-if="formName === 'Création d\'un client' || formName === 'Modification d\'un client'" />
        <CreateOrderFormCpt v-if="formName === 'Création de commande'" />
        <UpdateOrderFormCpt v-if="formName === 'Modification de commande'" />
        <AccountFormCpt v-if="formName === 'Modification du compte'" />

    </div>
</template>

<script>
import ClientFormCpt from "@/components/forms/ClientFormCpt.vue";
import CreateOrderFormCpt from "@/components/forms/CreateOrderFormCpt.vue";
import { useClientsStore } from "@/stores/clientsStore";
import { useUtilsStore } from "@/stores/utilsStore";
import AccountFormCpt from './AccountFormCpt.vue';
import UpdateOrderFormCpt from "./UpdateOrderFormCpt.vue";

export default {
    name: "ModalFormLayoutCpt",
    components: {
    ClientFormCpt,
    AccountFormCpt,
    CreateOrderFormCpt,
    UpdateOrderFormCpt
},
    computed: {
        formName() {
            const utilsStore = useUtilsStore();
            return utilsStore.getFormName;
        }
    },
    updated() {
        const clientStore = useClientsStore();
        const utilsStore = useUtilsStore();
        console.log(utilsStore.getFormName);
        if(utilsStore.getFormName === "Création d'un client") {
            clientStore.resetform();
        }
    },
    data() {
        return {
            infos: ""
        }
    },
    methods: {
        closeModal() {
            const utilsStore = useUtilsStore();
            utilsStore.setFormName("");
        }
    },

};
</script>

<style>
.formLayout__header {
    display: flex;
    justify-content: center;
    align-content: center;
}
.formLayout__closebutton {
    position: absolute;
    right: 1rem;
    top: 1rem;
}
.formLayout {
	position: absolute;
	top: 0;
	background-color: white;
	border: 1px solid hsla(0, 0%, 0%, 0.18);
	padding: .5em 4em;
	border-radius: 1em;
    margin-top: 2em;
}

@media screen and (max-width: 300px) {
  .formLayout {
	padding: .5em 1em;
}
}
</style>
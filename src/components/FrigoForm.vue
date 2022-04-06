<script setup>
import { ref } from "vue";
const libelle = ref(""); // -- donnée réactive pr la saisie du libellé
</script>



<template>
    <form @submit.prevent="$emit('addA', libelle, quantite)">

        <input type="text" v-model="libelle" placeholder="aliment ?"/>
        <input type="number" v-model="quantite" placeholder="quantité ?"/>
        <input type="submit" value="valider" />
    </form>

    <form @submit.prevent="$emit('searchA', recherche)">

        <input type="text" v-model="recherche" placeholder="aliment recherché ?">
        <input type="submit" value="rechercher" />

    </form>

</template>



<style scoped>
</style>
<script setup>
defineProps(["aliment", "index"]);
</script>



<template>
 <li>{{ aliment.pourAfficher() }}
     <div id="bouttons">
        <button @click="$emit('deleteA', aliment.id)">Delete</button>
        <button @click="$emit('plusUnA', aliment.id, aliment.nom, aliment.quantite)">+1</button>
        <button @click="$emit('moinsUnA', aliment.id, aliment.nom, aliment.quantite)">-1</button>
    </div>
 </li>
</template>



<style>
</style>
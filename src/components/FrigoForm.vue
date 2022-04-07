<script setup>
import { ref } from "vue";
const libelle = ref(""); // -- donnée réactive pr la saisie du libellé
</script>



<template>
    <div class="alimentAjout">
    <form @submit.prevent="$emit('addA', libelle, quantite)">
        
        <label id="phraseAliment">Ajoute un Aliment</label>
        <input id="aliment" type="text" v-model="libelle" placeholder="Aliment"/>
        <input id="quantite" type="number" v-model="quantite" placeholder="Quantité"/>
        <input id="valider" type="submit" value="Valider" />
    </form>
    </div>

    <div class="alimentRecherche">
    <form @submit.prevent="$emit('searchA', recherche)">
        <label id="phraseRecherche">Recherche un Aliment</label>
        <input id="aliment2" type="text" v-model="recherche" placeholder="Aliment">
        <input id="rechercher" type="submit" value="Rechercher" />

    </form>
    </div>
</template>



<style scoped>

    label[id="phraseAliment"]{
        position: relative;
        top: 5px;
    }

    input[id="aliment"]{
        position: relative;
        top: 15px;
    }

    input[id="quantite"]{
        position: relative;
        top: 25px;
    }

    input[id="valider"]{
        position: relative;
        top: 35px;
    }

    label[id="phraseRecherche"]{
        position: relative;
        top: 5px;
    }

    input[id="aliment2"]{
        position: relative;
        top: 15px;
    }

    input[id="rechercher"]{
        position: relative;
        top: 25px;
    }


    input[type="submit"] {
        background-color: #C89F9C;
        font-family: "Brush Script MT", "Brush Script Std", "cursive";
        color: white;
        text-align : center;
        font-size: 20px;
        border: 2px solid #CA7C5C;
        border-radius: 30px;
        width : 100px;
        height :30px;
        position :relative;
        margin-right:3px;
    }

    div{
        clear:left;
        text-align:center;
    }

    .alimentAjout, .alimentRecherche{
        
        position: relative;
        width: 170px;
        min-height: 150px;
        height: auto;
        margin: 0 auto;
        
    }


    
</style>
<script setup>

import { reactive, onMounted } from 'vue' ;
// -- les 2 sous composants
import FrigoItem from "./FrigoItem.vue";
import FrigoForm from "./FrigoForm.vue"
// -- la classe Aliment
import Aliment from "../Aliment" ;

const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/3/produits";


// -- la liste des aliments
// --> donnée réactive = l'affichage sera actualisée automatiquement à chaque changement dans la liste 
const listeA = reactive([]);

//Afficher le contenu du frigo
function getFrigo(){
    const fetchOptions = { method: "GET"};
    fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log("get Frigo : " + dataJSON);
        listeA.splice(0, listeA.length)
        dataJSON.forEach((v)=>listeA.push(new Aliment(v.id, v.nom, v.qte)));
    })
    .catch((error)=>console.log("get Frigo : " + error));
}

//Ajouter un nouvel aliment au frigo
function handlerAdd(libelle, quantite){
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "POST",
 headers: myHeaders,
 body: JSON.stringify({nom : libelle, qte : quantite}),
 }; 
 fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log("handlerAdd : " + dataJSON);
        getFrigo()
    })
    .catch((error)=>console.log("handlerAdd : " + error));
}

//Supprimer un aliment du frigo
function handlerDelete(id) {
const fetchOptions = { method: "DELETE"};
    fetch(url+"/"+id, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log("handlerDelete : " + dataJSON);
        getFrigo()
    })
    .catch((error)=>console.log("handlerDelete : " + error));
}

//Ajouter 1 à la qte d'un produit present dans le frigo
function handlerPlusUn(id, libelle, quantite) {
    let quantitePlusUn = quantite +1;
    console.log("handlerPlusUn : " + id, libelle, quantite);
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "PUT",
 headers: myHeaders,
 body: JSON.stringify({id:id, nom:libelle, qte:quantitePlusUn}),
 };
 fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        getFrigo()
    })
    .catch((error)=>console.log(error));

}


//Supprimer 1 à la qte d'un produit du frigo

function handlerMoinsUn(id, libelle, quantite){
let quantiteMoinsUn = quantite -1;
if(quantiteMoinsUn >0){
     console.log("handlerPlusUn : " + id, libelle, quantite);
    let myHeaders = new Headers();
 myHeaders.append("Content-Type", "application/json");
 const fetchOptions = {
 method: "PUT",
 headers: myHeaders,
 body: JSON.stringify({id:id, nom:libelle, qte:quantiteMoinsUn}),
 };
 fetch(url, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log(dataJSON);
        getFrigo()
    })
    .catch((error)=>console.log(error));
}
else {
    handlerDelete(id);
}
}

//Rechercher des produits dans le frigo
function handlerSearch(recherche){
    const fetchOptions = { method: "GET"};
    fetch(url+"?search="+recherche, fetchOptions)
    .then((response)=>{
        return response.json();
    })
    .then((dataJSON)=>{
        console.log("handlerSearch : " + dataJSON);
        listeA.splice(0, listeA.length)
        dataJSON.forEach((v)=>listeA.push(new Aliment(v.id, v.nom, v.qte)));
    })
    .catch((error)=>console.log("handlerSearch : " + error));
}

onMounted(()=>{
    console.log("onmounted")
    getFrigo()
});


</script>


<template>
<h1>Mon frigo</h1>
    <div class="formulaire"><FrigoForm @addA="handlerAdd" @searchA="handlerSearch"></FrigoForm></div>

<div class="barreFrigo"></div>

<div class="contenu">
<ul>
    <FrigoItem v-for="(aliment, index) in listeA" 
        :key="aliment.id"
        :aliment="aliment"
        :index="index"
        @deleteA="handlerDelete"
        @plusUnA="handlerPlusUn"
        @moinsUnA="handlerMoinsUn"
    ></FrigoItem>
</ul>
</div>
</template>

<style scoped>
    p{
        font-family: "Brush Script MT", "Brush Script Std", "cursive";
    }

    h1{
        font-family: "Brush Script MT", "Brush Script Std", "cursive";
        font-size : 45px;
        text-align : center;
    }

    .formulaire, .contenu {
        background-color: #EEE2DF;
        position: relative;
        width: 170px;
        min-height: 300px;
        height: auto;
        margin: 0 auto;
        border-radius: 10px;
        padding: 1px 10px;
        border-style: inset;
        width: 250px;
        height: 400px;
    }

    .formulaire{
        position: fixed;
        top: 170px;
        left:625px;
    }

    .contenu{
        position: fixed;
        top: 170px;
        left:900px;
    }

    .barreFrigo{
        background-color: hsl(18, 15%, 57%);
        position: fixed;
        
        
        padding: 1px 10px;
        
        height: 403px;
        top: 170px;
        left:890px;
    }


</style>
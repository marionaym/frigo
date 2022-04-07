<script setup>
defineProps(["aliment", "index"]);
</script>



<template>
 <li class="aliments">{{ aliment.pourAfficher() }}
     <div id="bouttons">
         <button @click="$emit('plusUnA', aliment.id, aliment.nom, aliment.quantite)"><span class="plus1">+1</span></button>
        <button @click="$emit('deleteA', aliment.id)"><img src="../assets/poubelle.png" alt="poubelle"></button>
        <button @click="$emit('moinsUnA', aliment.id, aliment.nom, aliment.quantite)"><span class="moins1">-1</span></button>
    </div>
 </li>
</template>



<style>
    button {
        background-color: #C89F9C;
        font-family: "Brush Script MT", "Brush Script Std", "cursive";
        color: white;
        text-align : center;
        font-size: 20px;
        border: 2px solid #CA7C5C;
        border-radius: 30px;
        width : 30px;
        height :30px;
        position :relative;
        margin-right:3px;
    }
    
    img {
    width : 18px;
    height : 18px;
    border-left:10px;
    }

    .aliments{
        position: relative;
        top:-12px;
        left:-23px;
        list-style-type: none;
        text-align:center;
    }
    
</style>
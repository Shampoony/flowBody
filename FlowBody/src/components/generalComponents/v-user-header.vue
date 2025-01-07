<template>
    <div class="v-user-header">
        <div class="v-user-header__title" :class="{active : type === 'login'}">
            Авторизация 
        </div>
        <div class="v-user-header__title" :class="{active : type === 'register'}">
            Регистрация 
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';


const props = defineProps({
  type: String,
})
</script>
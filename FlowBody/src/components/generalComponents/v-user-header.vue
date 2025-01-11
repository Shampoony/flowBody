<template>
    <div class="v-user-header">
        <div class="v-user-header__title" :class="{active : type === 'login'}">
            <router-link :to="{name: 'login'}">
            Авторизация 
        </router-link>
        </div>
        <div class="v-user-header__title" :class="{active : type === 'register'}">
            <router-link :to="{name: 'registration'}">
                Регистрация
            </router-link>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';


const props = defineProps({
  type: String,
})
</script>
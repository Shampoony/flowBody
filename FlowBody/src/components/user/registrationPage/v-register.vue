<template>
    <div>
        <div class="v-register">
            <v-user-header/>
            <div class="v-register__container container">
                <div class="v-register__info info">
                    <h1 class="v-register__title title">
                    Создайте аккаунт
                    </h1>
                    <p class="v-register__subtitle subtitle">
                        Пользуйся нашем приложением и получай самые выгодные туры  
                    </p>
                </div>
                <slot name="content">
                   
                </slot>
                <div class="v-register__steps">
                    <div class="v-register__step" :class="{active : step == 1}">
                    </div>
                    <div class="v-register__step" :class="{active : step == 2}">
                    </div>
                    <div class="v-register__step" :class="{active : step == 3}">
                    </div>
                </div>
                <slot name="buttons">

                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import vUserHeader from '@/components/generalComponents/v-user-header.vue';

const props = defineProps({
  step: Number,
})
</script>
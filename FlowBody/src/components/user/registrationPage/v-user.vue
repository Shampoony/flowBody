<template>
    <div>
        <div class="v-user">
            <v-user-header :type="type"/>
            <div class="v-user__container container">
                <div class="v-user__info info">
                    <h1 class="v-user__title title">
                    <slot name="title">
                        Создайте аккаунт
                    </slot>
                    </h1>
                    <p class="v-user__subtitle subtitle">
                        <slot name="subtitle">
                            Пользуйся нашем приложением и получай самые выгодные туры  
                        </slot>
                    </p>
                </div>
                <slot name="content">
                   
                </slot>
                <!-- <div class="v-user__steps" v-if="step">
                    <router-link :to="{name: 'registration'}" class="v-user__step" :class="{active : step == 1}">
                    </router-link>
                    <router-link :to="{name: 'registration-step-2'}" class="v-user__step" :class="{active : step == 2}">
                    </router-link>
                    <router-link :to="{name: 'registration-step-3'}" class="v-user__step" :class="{active : step == 3}">
                    </router-link>
                    
                </div> -->
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
  type: String,
})
</script>
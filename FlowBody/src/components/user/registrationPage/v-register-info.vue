<template>
    <div class="v-register-num">
      <v-register :step="3">
        <template v-slot:content>
          <div class="v-register__content">
            <form action="" class="v-register__form">
              <div class="v-register__form-block">
                <label for="number" class="v-register__form-label">Пол</label>
                <input
                  type="text"
                  class="v-register__form-input"
                  id="password1"
                  v-model="gender"
                  placeholder="Введите ваш пол"
                />
              </div>
              <div class="v-register__form-block">
                <label for="password2" class="v-register__form-label">Город</label>
                <input
                  type="text"
                  class="v-register__form-input"
                  id="password2"
                  v-model="city"
                  placeholder="Введите город"
                />
              </div>
            </form>
          </div>
        </template>
  
        <template v-slot:buttons>
          <router-link
            :to="{ name: 'registration-step-2' }"
            class="v-register__button"
            @click="saveData"
          >
            Продолжить
          </router-link>
        </template>
      </v-register>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import vRegister from './v-register.vue';
  import { useRegisterStore } from '@/stores/store';
  
  const store = useRegisterStore(); // Получаем доступ к Pinia store
  
  const gender = ref('');
  const city  = ref('');
  
  // Сохранение данных в store при продолжении
  const saveData = () => {
    store.updateFormField('gender', gender.value);
    store.updateFormField('city', city.value);
  };
  </script>
  
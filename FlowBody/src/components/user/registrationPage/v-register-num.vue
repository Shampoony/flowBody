<template>
    <div class="v-register-num">
      <v-register :step="1">
        <template v-slot:content>
          <div class="v-register__content">
            <form action="" class="v-register__form">
              <div class="v-register__form-block">
                <label for="number" class="v-register__form-label">Номер телефона</label>
                <input
                  type="number"
                  class="v-register__form-input"
                  id="number"
                  v-model="number"
                  placeholder="Введите номер телефона"
                />
              </div>
              <div class="v-register__form-block">
                <label for="password" class="v-register__form-label">Одноразовый пароль</label>
                <input
                  type="text"
                  class="v-register__form-input"
                  id="password"
                  v-model="OTP"
                  placeholder="Введите одноразовый пароль"
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
  import vRegister from './v-register.vue';

  import { ref } from 'vue';
  import { useRegisterStore } from '../../../stores/store';
  
  const store = useRegisterStore(); // Получаем доступ к Pinia store
  
  const number = ref('');
  const OTP = ref('');
  
  // Сохранение данных в store при продолжении
  const saveData = () => {
    store.updateFormField('number', number.value);
    store.updateFormField('OTP', OTP.value);    
};

  </script>
  
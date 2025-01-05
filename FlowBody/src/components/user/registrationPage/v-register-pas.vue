<template>
    <div class="v-register-num">
      <v-register :step="2">
        <template v-slot:content>
          <div class="v-register__content">
            <form action="" class="v-register__form">
              <div class="v-register__form-block">
                <label for="number" class="v-register__form-label">Пароль</label>
                <input
                  type="text"
                  class="v-register__form-input"
                  id="password1"
                  v-model="password1"
                  placeholder="Введите пароль"
                />
              </div>
              <div class="v-register__form-block">
                <label for="password2" class="v-register__form-label">Подтвердите пароль</label>
                <input
                  type="text"
                  class="v-register__form-input"
                  id="password2"
                  v-model="password2"
                  placeholder="Введите пароль"
                />
              </div>
            </form>
            <div class="error" v-if="passwordError">
                Пароли не совпадают !
              </div>
          </div>
        </template>
  
        <template v-slot:buttons>
          <router-link
            :to="{ name: 'registration-step-3' }"
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

const password1 = ref('');
const password2  = ref('');
const passwordError = ref(false);

// Сохранение данных в store при продолжении
const saveData = () => {
if(password1.value === password2.value) {
    store.updateFormField('password', password1.value);
} else {
    console.log('В условии')
    passwordError.value = true
}
};

</script>
  
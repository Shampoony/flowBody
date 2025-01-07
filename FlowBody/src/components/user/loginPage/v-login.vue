<template>
    <div class="v-login">
        <div class="v-login__container">
            <v-user :type="'login'" >
                <template v-slot:title>
                    Войдите в свой аккаунт
                </template>
                <template v-slot:subtitle>
                    Привет, с возвращением !
                </template>
                <template v-slot:content>
                <div class="v-user__content mb-32">
                  <form action="" class="v-user__form" @submit.prevent="saveData">
                    <div class="v-user__form-block">
                      <label for="number" class="v-user__form-label">Номер телефона</label>
                      <input
                        type="text"
                        class="v-user__form-input"
                        id="number"
                        v-model="number"
                        placeholder="Введите номер телефона"
                      />
                    </div>
                    <div class="v-user__form-block mb-4">
                      <label for="password" class="v-user__form-label">Пароль</label>
                      <input
                        type="text"
                        class="v-user__form-input"
                        id="password"
                        v-model="password"
                        placeholder="Введите пароль"
                      />
                    </div>
                    
                    <div class="error" v-if="!isDataCorrect">
                      Данные неверны !
                    </div>
                  </form>
                </div>
              </template>
              <template v-slot:buttons>
                  <div class="v-user__button">
                    Войти
                  </div>
                  <router-link class="v-user__link" :to="{name:'reset-password'}">Забыли пароль?</router-link>
              </template>
            </v-user>
        </div>
    </div>
</template>
<script setup>
import vUser from '../registrationPage/v-user.vue';

import { ref } from 'vue';
import { validateNumber } from '@/utils';
import { userLoginStore } from '@/stores/userLoginStore';

const store = userLoginStore();

const number = ref('');
const password = ref('');
const isDataCorrect = ref(false)

const saveData = () => {
  if (!validateNumber(number.value)) {
    isDataCorrect.value = false;
    return;
  }

  isDataCorrect.value = true;
  store.updateFormField('number', number.value);
  store.updateFormField('password', OTP.value);

  // Переход на следующий шаг
  router.push({ name: 'rate'});
};

</script>
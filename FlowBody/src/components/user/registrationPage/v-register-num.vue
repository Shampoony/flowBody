<template>
  <div class="v-register-num">
    <v-user :step="1" :type="'register'">
      <template v-slot:content>
        <div class="v-user__content">
          <form action="" class="v-user__form">
            <div class="v-user__form-block" >
              <label for="number" class="v-user__form-label">Номер телефона</label>
              <input
                type="text"
                class="v-user__form-input"
                :class="{'error-input' : isError}"
                id="number"
                v-model="number"
                placeholder="Введите номер телефона"
              />
            </div>
            <div class="v-user__form-block">
              <label for="password" class="v-user__form-label">Username</label>
              <input
                type="text"
                class="v-user__form-input"
                id="password"
                v-model="username"
                placeholder="Введите username"
              />
            </div>
            <div class="error" v-if="isError">Введите корректный номер телефона</div>
          </form>
        </div>
      </template>

      <template v-slot:buttons>
        <button
          type="button"
          class="v-user__button"
          @click="saveData"
        >
          Продолжить
        </button>
      </template>
    </v-user>
  </div>
</template>

<script setup>
import vUser from './v-user.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { validateNumber } from '@/utils';
import { useRegisterStore } from '@/stores/store';

// Инициализация store
const store = useRegisterStore();
const router = useRouter();

// Переменные состояния
const number = ref('');
const username = ref('');
const isError = ref(false);
const errorText = ref('');

const tg = window.Telegram
if (tg && tg.WebApp) {
  username.value = tg.WebApp.initDataUnsafe.user?.username
}

// Сохранение данных
const saveData = () => {
  if (!validateNumber(number.value) || !username.value) {
    isError.value = true;
    errorText.value = !validateNumber(number.value)
      ? 'Введите корректный номер телефона'
      : 'Введите корректный username';
    return;
  }

  isError.value = false;
  store.updateFormField('number', number.value);
  store.updateFormField('username', username.value);

  
};
</script>


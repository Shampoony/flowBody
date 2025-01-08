<template>
    <div class="v-register-num">
      <v-user :step="3" :type="'register'">
        <template v-slot:content>
          <div class="v-user__content">
            <form action="" class="v-user__form">
              <div class="v-user__form-block">
                <label for="number" class="v-user__form-label">Пол</label>
                <input
                  type="text"
                  class="v-user__form-input"
                  id="password1"
                  v-model="gender"
                  placeholder="Введите ваш пол"
                />
              </div>
              <div class="v-user__form-block">
                <label for="password2" class="v-user__form-label">Город</label>
                <input
                  type="text"
                  class="v-user__form-input"
                  id="password2"
                  v-model="country"
                  placeholder="Введите вашу страну"
                />
              </div>
            </form>
          </div>
        </template>
  
        <template v-slot:buttons>
          <div
            class="v-user__button"
            @click="saveData"
          >
            Продолжить
          </div>
        </template>
      </v-user>
    </div>
  </template>
  
  <script setup>
  import vUser from './v-user.vue';
  
  import { ref } from 'vue';
  import { useRegisterStore } from '@/stores/store';
  import { getToken, updateUser } from '@/api/requests';
  
  const store = useRegisterStore(); // Получаем доступ к Pinia store
  
  const gender = ref('');
  const country  = ref('');
  const tg = window?.Telegram?.WebApp;
  
  // Сохранение данных в store при продолжении
  const saveData = async  () => {
    if (tg && tg.initDataUnsafe.user) {
       await getToken(tg.initDataUnsafe.user.id)
       await updateUser(JSON.stringify({'gender':gender.value, 'country':country.value}))

    }
   
    /* store.updateFormField('gender', gender.value);
    store.updateFormField('city', city.value); */
  };
  </script>
  
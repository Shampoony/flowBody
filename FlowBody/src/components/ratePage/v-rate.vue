<template>
    <div class="wrapper">
      <main class="v-rate">
          <div class="v-rate__cotainer container">
              <div class="v-rate__info info">
                  <h1 class="v-rate__title title">Тарифы</h1>
                  <p class="v-rate__subtitle subtitle">Выберите свой тариф</p>
                  <p class="v-rate__subtitle subtitle">тут долно быть что-то ---- {{ data }}, {{ initDataRaw }} </p>
                  <router-link :to="{name: 'registration-step-2'}">Ссылка на второй шаг</router-link>
              </div>
              <div class="v-rate__content">
                  <ul class="v-rate__list">
                      <li class="v-rate__list-item rate">
                          <h3 class="rate__title title">
                              Базовый
                          </h3>
                          <h2 class="rate__price">
                              20$
                          </h2>
                          <p class="rate__subtitle subtitle">1 месяц доступ </p>
                          <p class="rate__subtitle subtitle">План тренировок</p>
                          <p class="rate__subtitle subtitle">План питания</p>
                      </li>
                      <li class="v-rate__list-item rate">
                          <h3 class="rate__title title">
                              Средний
                          </h3>
                          <h2 class="rate__price">
                              35$
                          </h2>
                          <p class="rate__subtitle subtitle">3 месяца доступ </p>
                          <p class="rate__subtitle subtitle">План тренировок</p>
                          <p class="rate__subtitle subtitle">План питания</p>
                      </li>
                      <li class="v-rate__list-item rate">
                          <h3 class="rate__title title">
                              Средний
                          </h3>
                          <h2 class="rate__price">
                              60$
                          </h2>
                          <p class="rate__subtitle subtitle">6 месяцев доступ </p>
                          <p class="rate__subtitle subtitle">План тренировок</p>
                          <p class="rate__subtitle subtitle">План питания</p>
                      </li>
                  </ul>
              </div>
          </div>
      </main>
      <vFooter />
    </div>
  </template>
  
<script>
import vFooter from '@/components/generalComponents/v-footer.vue'

import { retrieveLaunchParams } from '@telegram-apps/sdk';

export default {
  data() {
    return {
      initDataRaw: '',
      data: ''
    };
  },
  components: {vFooter},
  methods: {
    async sendInitDataToServer() {
      // Получаем raw данные initData
      const { initDataRaw } = retrieveLaunchParams();
      
      try {
        const response = await fetch('https://your-fastapi-url.com/api', {
          method: 'POST',
          headers: {
            'Authorization': `tma ${initDataRaw}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          console.log("User authorized", data);
           this.data = data;
          // Сохраняем токен или выполняем дополнительные действия
        } else {
          console.error("Access denied");
          this.data = 'Ошибочка'
        }
      } catch (error) {
        console.error("Error while sending initData", error);
         this.data = 'Ошибочка 2'
      }
    },
  },
  mounted() {
    this.sendInitDataToServer();
  },
};

</script>
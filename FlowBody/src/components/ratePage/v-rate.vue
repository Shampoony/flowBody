<template>
    <div class="wrapper">
      <main class="v-rate">
          <div class="v-rate__cotainer container">
              <div class="v-rate__info info">
                  <h1 class="v-rate__title title">Тарифы</h1>
                  <p class="v-rate__subtitle subtitle">Выберите свой тариф</p>
                  <router-link :to="{name: 'registration'}">Ссылка на первый шаг</router-link>
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
  <script setup>
  import { onMounted, ref } from 'vue';
  
  // Создаем переменную для хранения Telegram ID
  const tgId = ref(null);
  
  // Получаем Telegram ID при монтировании компонента
  onMounted(() => {
    // Проверяем, доступна ли библиотека Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      // Получаем Telegram ID
      tgId.value = window.Telegram.WebApp.initDataUnsafe.user.id;
      console.log("Telegram ID:", tgId.value); // Выводим в консоль
    }
  });
  </script>
<template>
    <div class="wrapper">
      <main class="v-rate">
          <div class="v-rate__cotainer container">
              <div class="v-rate__info info">
                  <h1 class="v-rate__title title">Тарифы</h1>
                  <p class="v-rate__subtitle subtitle">Выберите свой тариф</p>
                  <p class="v-rate__subtitle subtitle">Ваш телеграм id - {{ tgId }}</p>
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
  
<script setup>
import vFooter from '@/components/generalComponents/v-footer.vue'
  
import { ref, onMounted } from 'vue';

// Используем ref для хранения значений
const tgId = ref(null);
const userData = ref(null);

// Функция для получения Telegram ID и данных пользователя
const getTelegramId = () => {
  // Проверяем, доступен ли Telegram WebApp API
  if (window.Telegram && window.Telegram.WebApp) {
    const initData = window.Telegram.WebApp.initDataUnsafe; // Данные пользователя
    if (initData && initData.user) {
      tgId.value = initData.user.id; // Сохраняем Telegram ID
      userData.value = initData.user; // Сохраняем другие данные пользователя (например, имя)
    } else {
      console.error("Не удалось получить данные пользователя.");
    }
  } else {
    console.error("Telegram WebApp API недоступен.");
  }
};

// Вызов функции при монтировании компонента
onMounted(() => {
  getTelegramId(); // Получаем Telegram ID, когда компонент монтируется
});
</script>
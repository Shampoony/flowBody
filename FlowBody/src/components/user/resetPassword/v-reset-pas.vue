<template>
  <div class="v-reset-access">
    <div class="v-reset-access__container">
      <v-user :type="'login'">
        <template v-slot:title>
          Код доступа
        </template>
        <template v-slot:subtitle>
          Введите код доступа, который отправили 
          на указанный телефон для получения кода 
          доступа к вашему аккаунту
        </template>
        <template v-slot:content>
          <div class="v-user__content mb-64">
            <form action="" class="v-user__form" @submit.prevent="saveData">
              <div class="v-user__form-block">
                <label for="code" class="v-user__form-label">Введите код доступа</label>
                
                <!-- Инпут с ячейками -->
                <div class="input-wrapper">
                  <input
                    type="text"
                    maxlength="6"
                    class="hidden-input"
                    v-model="code"
                    @input="updateBoxes"
                  />
                  <div class="visual-input">
                    <span
                      v-for="(box, index) in boxes"
                      :key="index"
                      class="digit-box"
                    >
                      {{ box }}
                    </span>
                  </div>
                </div>

              </div>

              <div class="error" v-if="!isDataCorrect">
                Введите корректный код доступа!
              </div>
            </form>
          </div>
        </template>
        <template v-slot:buttons>
          <div class="v-user__button" @click="saveData">
            Отправить
          </div>
        </template>
      </v-user>
    </div>
  </div>
</template>

<script setup>
import vUser from '../registrationPage/v-user.vue';
import { ref } from 'vue';

// Реактивные переменные
const code = ref('');
const boxes = ref(['', '', '', '', '', '']); // Визуальные ячейки
const isDataCorrect = ref(true);

// Методы
const updateBoxes = () => {
  const chars = code.value.split('');
  for (let i = 0; i < boxes.value.length; i++) {
    boxes.value[i] = chars[i] || ''; // Заполняем ячейки символами
  }
};

const saveData = () => {
  if (!code.value || code.value.length < 6) {
    isDataCorrect.value = false;
    return;
  }
  isDataCorrect.value = true;

  // Ваши действия, например, переход на другую страницу
  console.log('Код:', code.value);
  this.$router.push({ name: 'rate' });
};
</script>

<style scoped>
/* Стили для инпута */
.input-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.hidden-input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0; /* Скрываем настоящее поле ввода */
  z-index: 2;
  cursor: text;
}

.visual-input {
  display: flex;
  gap: 10px;
}

.digit-box {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  transition: border-color 0.3s;
}

.hidden-input:focus + .visual-input .digit-box {
  border-color: #007bff;
}

.hidden-input:focus-visible {
  outline: none;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>

<template>
    <div class="v-admin-field">
        <div class="v-admin-field__container admin-container">
            <v-right-admin/>
            <div class="v-admin-field__content admin-content">
                <h1 class="v-admin-field__title title">Категория тренировок</h1>
                <div class="flex gap-5 v-admin-field__handler">
                    <div class="v-admin-field__block">
                        <ul class="v-admin-field__list">
                            <li class="v-admin-field__list-item admin-row">
                                <div class="admin-row__title">
                                    Название дня
                                </div>
                                <div class="admin-row__value">
                                   <input class="admin-row__input" type="text" value="День рук ">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="v-admin-field__buttons">
                        <div class="v-admin-field__button save">Сохарнить</div>
                        <div class="v-admin-field__button delete">Удалить</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import vRightAdmin from './v-right-admin.vue';
</script>
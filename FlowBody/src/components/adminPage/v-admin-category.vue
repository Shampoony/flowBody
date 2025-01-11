<template>
    <div class="v-admin-category ">
        <div class="v-admin-category__container admin-container">
            <v-right-admin/>
            <div class="v-admin-category__app admin-content">
                <div class="flex justify-between items-center">
                    <h1 class="v-admin-category__title title">
                        Категория тренировок
                    </h1>
                    <button class="v-admin-category__button">
                        <img src="../../assets/images/plus.svg" alt="">
                        Добавить
                    </button>
                </div>
                <div class="v-admin-category__content">
                    <table class="v-admin-category__fields">
                    <thead>
                        <tr>
                            <th class="field-title">Id</th>
                            <th class="field-title">Название дня 1</th>
                            <th class="field-title">Название дня 2</th>
                            <th class="field-title">Название дня 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="v-admin-category__row">
                                <td class="v-admin-category__field">
                                <div class="id-cell">
                                    <input type="checkbox" name="" id="">
                                    <router-link :to="{ name: 'admin-field', params: { id: 1 } }">1</router-link>
                                </div>
                                </td>
                                <td class="v-admin-category__field">
                                    <router-link :to="{ name: 'admin-field', params: { id: 1 } }">
                                    Contact
                                    </router-link>
                                </td>
                                <td class="v-admin-category__field">Contact</td>
                                <td class="v-admin-category__field">Contact</td>
                           
                            </tr>

                    </tbody>
                </table>

                </div>
            </div>
        </div>
       
    </div>
</template>
<script setup>
import vRightAdmin from './v-right-admin.vue';
</script>
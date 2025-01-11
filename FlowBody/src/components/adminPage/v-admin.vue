<template>
 <div class="v-admin">
        <div class="v-admin__container admin-container">
            <v-right-admin/>
            <div class="v-admin__panel admin-content">
                <h1 class="v-admin__panel-title title">Админпанель</h1>
                <ul class="v-admin__panel-list">
                    <li class="v-admin__panel__list-item admin-app">
                        <h2 class="admin-app__title title">Тренировки</h2>
                        <div class="admin-app__models">
                            <router-link :to="{name:'admin-category', params: {name: 'gym'}}" class="admin-app__model">Категории тренировок </router-link>
                            <router-link to="" class="admin-app__model">День тренировок </router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                        </div>
                    </li>
                    <li class="v-admin__panel__list-item admin-app">
                        <h2 class="admin-app__title title">Тренировки</h2>
                        <div class="admin-app__models">
                            <router-link to="" class="admin-app__model">Категории тренировок </router-link>
                            <router-link to="" class="admin-app__model">День тренировок </router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                        </div>
                    </li>
                    <li class="v-admin__panel__list-item admin-app">
                        <h2 class="admin-app__title title">Тренировки</h2>
                        <div class="admin-app__models">
                            <router-link to="" class="admin-app__model">Категории тренировок </router-link>
                            <router-link to="" class="admin-app__model">День тренировок </router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                        </div>
                    </li>
                    <li class="v-admin__panel__list-item admin-app">
                        <h2 class="admin-app__title title">Тренировки</h2>
                        <div class="admin-app__models">
                            <router-link to="" class="admin-app__model">Категории тренировок </router-link>
                            <router-link to="" class="admin-app__model">День тренировок </router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                            <router-link to="" class="admin-app__model">План питания</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import vRightAdmin from './v-right-admin.vue';

</script>
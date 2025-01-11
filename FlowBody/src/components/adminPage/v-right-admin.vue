<template>
    <div class="v-right-admin">
        <div class="v-right-admin__user">
            <div class="v-right-admin__user-img">
                <img src="../../assets/images/avatar.svg" alt="">
            </div>
            <h2 class="v-right-user__name">
                User2359
            </h2>
        </div>
        <router-link :to="{name:'admin'}" class="v-right-admin__title title">Админпанель</router-link>

        <div class="v-right-admin__models">
            <div class="v-right-admin__model model">
                <router-link  to="" class="model__title">Тренировки</router-link>
                <ul class="model__categories">
                    <li class="model__categories-item">
                        <router-link :to="{name:'admin-category', params: {name: 'gym'}}">
                            Категории тренировок 
                        </router-link>
                    </li>
                    <li class="model__categories-item">
                        <router-link to="">
                            Категории тренировок 
                        </router-link>
                    </li>
                    <li class="model__categories-item">
                        <router-link to="">
                            Категории тренировок 
                        </router-link>
                    </li>
                    <li class="model__categories-item">
                        <router-link to="">
                            Категории тренировок 
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
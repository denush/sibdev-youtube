<template>
  <div>
    main view
    <router-link :to='{ name: "login" }'>Выйти</router-link>

    <div>
      <router-link :to='{ name: "search" }'>Поиск</router-link>
      <router-link :to='{ name: "favorites" }'>Избранное</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

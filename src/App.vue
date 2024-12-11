<template>
  <!--網頁最外層 -->
  <v-app>
    <!-- 導覽列 -->
    <v-app-bar class="bg-red">
      <!-- 放 container 否則太寬 -->
      <v-container class="d-flex align-center">
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <!-- 放路由 -->
    <v-main class="background-container">
      <!--一般的原件換頁便會銷毀，因此做特殊設定保留元件功能。詳細看官網資料 -->
      <!--
        slot = 插槽 = 自訂元件內的某部分 HTML
        v-slot="元件插槽提供的可用變數"
        Component = 目前路由應該顯示的元件
      -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 包住的元件不被銷毀 => 原件(倒數)可以被快取(首頁)不被銷毀
          include 指定保留的元件
          component = 動態元件
          is = 要使用的元件
          -->
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
.background-container {
  background-image: url(https://i.imgur.com/moOjFET.png);
  background-size: cover;
  background-position: center;
  height: 50vh;
  width: 100vw;
}
</style>

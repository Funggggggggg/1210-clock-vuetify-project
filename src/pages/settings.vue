<template>
  <!-- 同 bootstrap 一樣概念的切法 -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">設定鈴聲</h1>
      </v-col>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>試聽</th>
              <th>選擇</th>
            </tr>
          </thead>
          <tbody>
            <!-- 值 in settings 的陣列，一定要綁定 key 也就是 id-->
            <tr v-for="alarm in settings.alarms" :key="alarm.id">
              <td>{{ alarm.name }}</td>
              <td>
                <!-- 加上 controls 屬性成為一個簡單的撥放器-->
                <audio :src="alarm.file" controls></audio>
              </td>
              <td>
                <!-- settings 是從stores/settings 的 js 中來的 -->
                <v-radio-group v-model="settings.selected" hide-details>
                  <v-radio :value="alarm.id"></v-radio>
                </v-radio-group>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<!--  setup 是 vue3 的語法糖。
傳統 Vue 中需要寫很多像 export default、data() 這樣的包裝。
setup 幫你自動處理不必要和重複的規則，可直接寫變數、函式，使 Vue 更簡潔。 -->
<script setup>
// 引入有名稱的函式，從stores/settings 的 js 中
import { useSettingsStore } from '@/stores/settings'

// 有以下三種連結 route 的方式

// 1️⃣在 script 中書寫。
// import { definePage } from 'vue-router/auto'

// definePage({
//   meta: {
//     title: '設定',
//   },
// })

// 呼叫 `useSettingsStore`，並將其賦值給 `settings` 變數。
// 透過 `settings` 變數，我們可以存取 Store 中的資料（state）。
const settings = useSettingsStore()
</script>
<!--
2️⃣使用 json 格式書寫。
<route>
  <route lang="json">
{
  "meta": {
    "title": "設定"
  }
}
</route> -->

<!--
3️⃣使用 yaml 格式書寫，與 json 功能類似。
YAML 的優勢在於它：
1. 更簡潔（不需要大括號 {} 和引號 ""）。
2. 用縮排來表達層級關係，易於閱讀。
-->
<route lang="yaml">
meta:
  title: 設定
</route>

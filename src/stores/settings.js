import { defineStore } from 'pinia'

// 照組合式語法風格書寫 use- 開頭
// 去定義一個store(儲存)，第一個放 store id => settings
export const useSettingsStore = defineStore('settings', {
  // state: () => {
  //   return //單行可省略，但只有{}會被誤解為函數體，因此用()包起來 ↓
  // }
  // 定義 state 的初始化函數，此函數回傳要保存的資料
  state: () => ({
    // 鬧鐘資料陣列，每個物件代表一個鬧鐘
    // file（音檔路徑，透過 import.meta.url 生成完整的靜態資源網址，確保可以正確加載資源。）。
    // 鬧鐘 ID：用於唯一標識該鬧鐘
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
      {
        id: 3,
        name: 'doppio-ringing',
        file: new URL('@/assets/doppio-ringing.mp3', import.meta.url).href,
      },
      { id: 4, name: 'dance-jojo', file: new URL('@/assets/dance-jojo.mp3', import.meta.url).href },
    ],
    // 預設選擇的鬧鐘 ID = 1
    selected: 1,
  }),
  // computed 的概念，產生動態資料
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  persist: {
    key: 'pomodoro-settings',
    pick: ['selected'],
  },
})

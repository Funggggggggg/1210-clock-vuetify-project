import{a3 as r}from"./index-55xZOQEa.js";const m=r("settings",{state:()=>({alarms:[{id:1,name:"鬧鐘",file:new URL(""+new URL("alarm-BgEXsNyQ.mp3",import.meta.url).href,import.meta.url).href},{id:2,name:"yay",file:new URL(""+new URL("yay-BvpvSbeL.mp3",import.meta.url).href,import.meta.url).href},{id:3,name:"doppio-ringing",file:new URL(""+new URL("doppio-ringing-CR5waxTN.mp3",import.meta.url).href,import.meta.url).href},{id:4,name:"dance-jojo",file:new URL(""+new URL("dance-jojo-sNcqIILU.mp3",import.meta.url).href,import.meta.url).href}],selected:1}),getters:{selectedFile(){const e=this.alarms.findIndex(t=>t.id===this.selected);return this.alarms[e].file}},persist:{key:"pomodoro-settings",pick:["selected"]}});export{m as u};
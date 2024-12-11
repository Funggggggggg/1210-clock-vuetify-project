import{_ as B,u as P,o as d,c as b,a as e,n as a,r as A,s as S,b as _,d as w,w as i,e as s,t as F,f as G,F as H,V as g,g as v,h as D}from"./index-y2JmceeW.js";import{u as R}from"./list-BbHCEveC.js";import{u as $}from"./settings-WaIVpi8U.js";import{b as T,V as m,a as j}from"./route-block-BrD46jFW.js";const q={class:"digit",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"313.223px",height:"575.48px",viewBox:"0 0 313.223 575.48","enable-background":"new 0 0 313.223 575.48","xml:space":"preserve"},J={id:"圖層1"},K={__name:"Digit",props:{data:{type:String,default(){return""}},color:{type:String,default(){return"red"}}},setup(t){return P(l=>({"2e341d46":t.color})),(l,n)=>(d(),b("svg",q,[e("g",J,[e("path",{class:a([{active:"02356789".includes(t.data)},"digit-a"]),fill:"#E60012",d:`M285.089,7.654c0,4.227-3.427,7.653-7.654,7.653H31.554c-4.228,0-7.654-3.426-7.654-7.653l0,0
		C23.9,3.427,27.327,0,31.554,0h245.881C281.663,0,285.089,3.427,285.089,7.654L285.089,7.654z`},null,2),e("path",{class:a([{active:"045689".includes(t.data)},"digit-b"]),fill:"#E60012",d:`M8.559,281.045c-4.227,0.015-7.666-3.399-7.681-7.626L0.002,27.548c-0.015-4.227,3.399-7.666,7.626-7.681
		l0,0c4.227-0.015,7.666,3.399,7.681,7.626l0.876,245.871C16.201,277.591,12.786,281.03,8.559,281.045L8.559,281.045z`},null,2),e("path",{class:a([{active:"01234789".includes(t.data)},"digit-c"]),fill:"#E60012",d:`M305.597,281.045c-4.228,0.015-7.666-3.399-7.682-7.626l-0.875-245.871
		c-0.015-4.227,3.399-7.666,7.627-7.681l0,0c4.227-0.015,7.665,3.399,7.681,7.626l0.875,245.871
		C313.238,277.591,309.824,281.03,305.597,281.045L305.597,281.045z`},null,2),e("path",{class:a([{active:"2345689".includes(t.data)},"digit-d"]),fill:"#E60012",d:`M285.088,286.5c0,4.23-3.427,7.657-7.654,7.657H31.555c-4.228,0-7.654-3.427-7.654-7.657l0,0
		c0-4.233,3.426-7.667,7.654-7.667h245.879C281.662,278.833,285.088,282.266,285.088,286.5L285.088,286.5z`},null,2),e("path",{class:a([{active:"0235689".includes(t.data)},"digit-e"]),fill:"#E60012",d:`M285.084,567.827c0,4.227-3.427,7.653-7.654,7.653H31.559c-4.228,0-7.654-3.427-7.654-7.653l0,0
		c0-4.228,3.426-7.654,7.654-7.654H277.43C281.658,560.172,285.084,563.599,285.084,567.827L285.084,567.827z`},null,2),e("path",{class:a([{active:"0268".includes(t.data)},"digit-f"]),fill:"#E60012",d:`M8.557,561.955c-4.227,0.014-7.666-3.4-7.681-7.627L0,308.457c-0.015-4.227,3.399-7.666,7.626-7.682l0,0
		c4.227-0.014,7.666,3.4,7.681,7.627l0.876,245.871C16.198,558.5,12.784,561.939,8.557,561.955L8.557,561.955z`},null,2),e("path",{class:a([{active:"013456789".includes(t.data)},"digit-g"]),fill:"#E60012",d:`M305.594,561.955c-4.228,0.014-7.666-3.4-7.682-7.627l-0.875-245.871c-0.015-4.227,3.399-7.666,7.627-7.682
		l0,0c4.227-0.014,7.665,3.4,7.681,7.627l0.875,245.871C313.235,558.5,309.821,561.939,305.594,561.955L305.594,561.955z`},null,2),e("circle",{class:a({active:t.data===":"}),fill:"#E60012",cx:"154.495",cy:"150.456",r:"19.82"},null,2),e("circle",{class:a({active:t.data===":"}),fill:"#E60012",cx:"154.495",cy:"431.365",r:"18"},null,2)])]))}},Q=B(K,[["__scopeId","data-v-8a7a97c9"]]),W={__name:"index",setup(t){const l={STOP:0,COUNTING:1,PAUSE:2},n=A(l.STOP),h=R(),{current:r,items:u,timeleft:o}=S(h),{setCurrentItem:k,countdown:E,setFinishItem:y}=h,L=$(),{selectedFile:I}=S(L),N=_(()=>r.value.length>0?r.value:u.value.length>0?"點擊開始":"沒有事項");let f=0;const p=()=>{n.value===l.STOP&&u.value.length>0&&k(),n.value=l.COUNTING,f=setInterval(()=>{E(),o.value<0&&x()},1e3)},x=()=>{clearInterval(f),n.value=l.STOP;const c=new Audio;c.src=I.value,c.play(),y(),u.value.length>0&&p()},V=()=>{clearInterval(f),n.value=l.PAUSE},z=_(()=>{const c=Math.floor(o.value/60).toString().padStart(2,"0"),C=(o.value%60).toString().padStart(2,"0");return c+":"+C});return(c,C)=>{const M=Q;return d(),w(D,{style:{color:"red"}},{default:i(()=>[s(j,null,{default:i(()=>[s(m,{cols:"12"},{default:i(()=>[e("h1",null,"目前事項"+F(N.value),1)]),_:1}),s(m,{cols:"12"},{default:i(()=>[(d(!0),b(H,null,G(z.value,(O,U)=>(d(),w(M,{key:U,data:O,color:"red"},null,8,["data"]))),128))]),_:1}),s(m,{cols:"12"},{default:i(()=>[s(g,{icon:" mdi-play",disabled:n.value===l.COUNTING||v(r).length===0&&v(u).length===0,onClick:p},null,8,["disabled"]),s(g,{icon:"mdi-pause",disabled:n.value!==l.COUNTING,onClick:V},null,8,["disabled"]),s(g,{icon:"mdi-skip-next",disabled:v(r).length===0,onClick:x},null,8,["disabled"])]),_:1})]),_:1})]),_:1})}}};typeof T=="function"&&T(W);export{W as default};
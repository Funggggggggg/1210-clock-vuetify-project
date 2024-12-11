import{as as i,at as u,p as m,m as C,ah as S,k,b as N,au as j}from"./index-55xZOQEa.js";const V=i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}),v=i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}),L=i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}),y={col:Object.keys(V),offset:Object.keys(v),order:Object.keys(L)};function G(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],I=m({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...v,order:{type:[String,Number],default:null},...L,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...C(),...S()},"VCol"),x=k()({name:"VCol",props:I(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=G(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return j(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],h=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const R=[...f,"baseline","stretch"],$=t=>R.includes(t),w=d("align",()=>({type:String,default:null,validator:$})),T=[...f,...h],P=t=>T.includes(t),E=d("justify",()=>({type:String,default:null,validator:P})),U=[...f,...h,"stretch"],A=t=>U.includes(t),O=d("alignContent",()=>({type:String,default:null,validator:A})),b={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(O)},B={align:"align",justify:"justify",alignContent:"align-content"};function M(t,a,e){let s=B[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const F=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:$},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...O,...C(),...S()},"VRow"),z=k()({name:"VRow",props:F(),setup(t,a){let{slots:e}=a;const s=N(()=>{const n=[];let l;for(l in b)b[l].forEach(r=>{const o=t[r],c=M(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return j(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),J={};export{x as V,z as a,J as b};

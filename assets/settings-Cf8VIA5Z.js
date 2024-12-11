import{u as te}from"./settings-WaIVpi8U.js";import{V as H,a as oe,b as M}from"./route-block-BrD46jFW.js";import{V as Q,b as ne,c as z,d as ue}from"./VInput-BWv53Ycw.js";import{p as R,I as _,a4 as re,m as W,a5 as ie,z as se,k as B,W as D,G as T,b as i,a6 as de,a7 as ce,a8 as fe,J as v,l as x,e as t,a9 as ve,aa as J,r as me,X,Q as P,q as ye,Y as Ve,F as U,ab as be,ac as Ce,ad as ge,ae as A,K as Se,H as ke,af as Ie,$ as he,ag as Pe,o as G,d as Re,w as h,a as m,c as K,f as _e,g as F,h as Be,t as xe}from"./index-y2JmceeW.js";const Y=Symbol.for("vuetify:selection-control-group"),$=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:_,trueIcon:_,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:re},...W(),...ie(),...se()},"SelectionControlGroup"),Ae=R({...$({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Ge=B()({name:"VSelectionControlGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:s}=n;const l=D(e,"modelValue"),a=T(),d=i(()=>e.id||`v-selection-control-group-${a}`),r=i(()=>e.name||d.value),o=new Set;return de(Y,{modelValue:l,forceUpdate:()=>{o.forEach(u=>u())},onForceUpdate:u=>{o.add(u),ce(()=>{o.delete(u)})}}),fe({[e.defaultsTarget]:{color:v(e,"color"),disabled:v(e,"disabled"),density:v(e,"density"),error:v(e,"error"),inline:v(e,"inline"),modelValue:l,multiple:i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:r,falseIcon:v(e,"falseIcon"),trueIcon:v(e,"trueIcon"),readonly:v(e,"readonly"),ripple:v(e,"ripple"),type:v(e,"type"),valueComparator:v(e,"valueComparator")}}),x(()=>{var u;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(u=s.default)==null?void 0:u.call(s)])}),{}}}),p=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...W(),...$()},"VSelectionControl");function Fe(e){const n=Ce(Y,void 0),{densityClasses:s}=ge(e),l=D(e,"modelValue"),a=i(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),d=i(()=>e.falseValue!==void 0?e.falseValue:!1),r=i(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),o=i({get(){const c=n?n.modelValue.value:l.value;return r.value?A(c).some(f=>e.valueComparator(f,a.value)):e.valueComparator(c,a.value)},set(c){if(e.readonly)return;const f=c?a.value:d.value;let V=f;r.value&&(V=c?[...A(l.value),f]:A(l.value).filter(y=>!e.valueComparator(y,a.value))),n?n.modelValue.value=V:l.value=V}}),{textColorClasses:u,textColorStyles:S}=Se(i(()=>{if(!(e.error||e.disabled))return o.value?e.color:e.baseColor})),{backgroundColorClasses:k,backgroundColorStyles:b}=ke(i(()=>o.value&&!e.error&&!e.disabled?e.color:e.baseColor)),g=i(()=>o.value?e.trueIcon:e.falseIcon);return{group:n,densityClasses:s,trueValue:a,falseValue:d,model:o,textColorClasses:u,textColorStyles:S,backgroundColorClasses:k,backgroundColorStyles:b,icon:g}}const w=B()({name:"VSelectionControl",directives:{Ripple:ve},inheritAttrs:!1,props:p(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:s,slots:l}=n;const{group:a,densityClasses:d,icon:r,model:o,textColorClasses:u,textColorStyles:S,backgroundColorClasses:k,backgroundColorStyles:b,trueValue:g}=Fe(e),c=T(),f=J(!1),V=J(!1),y=me(),I=i(()=>e.id||`input-${c}`),O=i(()=>!e.disabled&&!e.readonly);a==null||a.onForceUpdate(()=>{y.value&&(y.value.checked=o.value)});function N(C){O.value&&(f.value=!0,Ie(C.target,":focus-visible")!==!1&&(V.value=!0))}function E(){f.value=!1,V.value=!1}function Z(C){C.stopPropagation()}function ee(C){if(!O.value){y.value&&(y.value.checked=o.value);return}e.readonly&&a&&he(()=>a.forceUpdate()),o.value=C.target.checked}return x(()=>{var j,q;const C=l.label?l.label({label:e.label,props:{for:I.value}}):e.label,[le,ae]=X(s),L=t("input",P({ref:y,checked:o.value,disabled:!!e.disabled,id:I.value,onBlur:E,onFocus:N,onInput:ee,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?o.value:void 0},ae),null);return t("div",P({class:["v-selection-control",{"v-selection-control--dirty":o.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},d.value,e.class]},le,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",u.value],style:S.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:k,backgroundColorStyles:b}),ye(t("div",{class:["v-selection-control__input"]},[((q=l.input)==null?void 0:q.call(l,{model:o,textColorClasses:u,textColorStyles:S,backgroundColorClasses:k,backgroundColorStyles:b,inputNode:L,icon:r.value,props:{onFocus:N,onBlur:E,id:I.value}}))??t(U,null,[r.value&&t(be,{key:"icon",icon:r.value},null),L])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),C&&t(Q,{for:I.value,onClick:Z},{default:()=>[C]})])}),{isFocused:f,input:y}}}),we=R({...p({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),De=B()({name:"VRadio",props:we(),setup(e,n){let{slots:s}=n;return x(()=>{const l=w.filterProps(e);return t(w,P(l,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)}),{}}}),Te=R({height:{type:[Number,String],default:"auto"},...ne(),...Pe($(),["multiple"]),trueIcon:{type:_,default:"$radioOn"},falseIcon:{type:_,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Ue=B()({name:"VRadioGroup",inheritAttrs:!1,props:Te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:s,slots:l}=n;const a=T(),d=i(()=>e.id||`radio-group-${a}`),r=D(e,"modelValue");return x(()=>{const[o,u]=X(s),S=z.filterProps(e),k=w.filterProps(e),b=l.label?l.label({label:e.label,props:{for:d.value}}):e.label;return t(z,P({class:["v-radio-group",e.class],style:e.style},o,S,{modelValue:r.value,"onUpdate:modelValue":g=>r.value=g,id:d.value}),{...l,default:g=>{let{id:c,messagesId:f,isDisabled:V,isReadonly:y}=g;return t(U,null,[b&&t(Q,{id:c.value},{default:()=>[b]}),t(Ge,P(k,{id:c.value,"aria-describedby":f.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:V.value,readonly:y.value,"aria-labelledby":b?c.value:void 0,multiple:!1},u,{modelValue:r.value,"onUpdate:modelValue":I=>r.value=I}),l)])}})}),{}}}),$e=["src"],Oe={__name:"settings",setup(e){const n=te();return(s,l)=>(G(),Re(Be,{style:{color:"red"}},{default:h(()=>[t(oe,null,{default:h(()=>[t(H,{cols:"12"},{default:h(()=>l[1]||(l[1]=[m("h1",{class:"text-center"},"設定鈴聲",-1)])),_:1}),t(H,{cols:"12"},{default:h(()=>[t(ue,null,{default:h(()=>[l[2]||(l[2]=m("thead",null,[m("tr",null,[m("th",null,"名稱"),m("th",null,"試聽"),m("th",null,"選擇")])],-1)),m("tbody",null,[(G(!0),K(U,null,_e(F(n).alarms,a=>(G(),K("tr",{key:a.id},[m("td",null,xe(a.name),1),m("td",null,[m("audio",{src:a.file,controls:""},null,8,$e)]),m("td",null,[t(Ue,{modelValue:F(n).selected,"onUpdate:modelValue":l[0]||(l[0]=d=>F(n).selected=d),"hide-details":""},{default:h(()=>[t(De,{value:a.id},null,8,["value"])]),_:2},1032,["modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}};typeof M=="function"&&M(Oe);export{Oe as default};
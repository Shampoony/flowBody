import{f as a,r as f,o as u,c as i,b as _,w as l,a as s,g as d,v as p,h as b,e as w}from"./index-BbW9entg.js";import{_ as k}from"./v-user-B-F7M5AC.js";import{u as g}from"./store-Cq1IjKQc.js";const x={class:"v-register-num"},V={class:"v-user__content"},y={action:"",class:"v-user__form"},C={class:"v-user__form-block"},N={class:"v-user__form-block"},B={key:0,class:"error"},U={__name:"v-register-pas",setup(h){const v=g(),o=a(""),t=a(""),n=a(!1),c=()=>{o.value===t.value?v.updateFormField("password",o.value):(console.log("В условии"),n.value=!0)};return(D,e)=>{const m=f("router-link");return u(),i("div",x,[_(k,{step:2,type:"register"},{content:l(()=>[s("div",V,[s("form",y,[s("div",C,[e[2]||(e[2]=s("label",{for:"number",class:"v-user__form-label"},"Пароль",-1)),d(s("input",{type:"text",class:"v-user__form-input",id:"password1","onUpdate:modelValue":e[0]||(e[0]=r=>o.value=r),placeholder:"Введите пароль"},null,512),[[p,o.value]])]),s("div",N,[e[3]||(e[3]=s("label",{for:"password2",class:"v-user__form-label"},"Подтвердите пароль",-1)),d(s("input",{type:"text",class:"v-user__form-input",id:"password2","onUpdate:modelValue":e[1]||(e[1]=r=>t.value=r),placeholder:"Введите пароль"},null,512),[[p,t.value]])])]),n.value?(u(),i("div",B," Пароли не совпадают ! ")):b("",!0)])]),buttons:l(()=>[_(m,{to:{name:"registration-step-3"},class:"v-user__button",onClick:c},{default:l(()=>e[4]||(e[4]=[w(" Продолжить ")])),_:1})]),_:1})])}}};export{U as default};

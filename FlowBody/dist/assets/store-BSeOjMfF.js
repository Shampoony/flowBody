import{_ as c,o,c as n,a as e,b as l,i as a,n as r,j as _}from"./index-Hyrh3HQv.js";const v={},d={class:"v-user-header"};function u(s,t){return o(),n("div",d,t[0]||(t[0]=[e("div",{class:"v-user-header__title"}," Авторизация ",-1),e("div",{class:"v-user-header__title active"}," Регистрация ",-1)]))}const g=c(v,[["render",u]]),p={class:"v-register"},m={class:"v-register__container container"},h={class:"v-register__steps"},b={__name:"v-register",props:{step:Number},setup(s){return(t,i)=>(o(),n("div",null,[e("div",p,[l(g),e("div",m,[i[0]||(i[0]=e("div",{class:"v-register__info info"},[e("h1",{class:"v-register__title title"}," Создайте аккаунт "),e("p",{class:"v-register__subtitle subtitle"}," Пользуйся нашем приложением и получай самые выгодные туры ")],-1)),a(t.$slots,"content"),e("div",h,[e("div",{class:r(["v-register__step",{active:s.step==1}])},null,2),e("div",{class:r(["v-register__step",{active:s.step==2}])},null,2),e("div",{class:r(["v-register__step",{active:s.step==3}])},null,2)]),a(t.$slots,"buttons")])])]))}},F=_("register",{state:()=>({registrationForm:{number:"",OTP:"",password:"",gender:"",city:""}}),actions:{updateFormField(s,t){this.registrationForm.hasOwnProperty(s)&&(this.registrationForm[s]=t),console.log(this.registrationForm)}}});export{b as _,F as u};
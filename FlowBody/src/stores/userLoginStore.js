import { defineStore } from 'pinia';

export const userLoginStore = defineStore('register', {
  state: () => ({
    registrationForm: {
      number: '',
      password: '',
    },
  }),
  actions: {
    updateFormField(field, value) {
      if (this.registrationForm.hasOwnProperty(field)) {
        this.registrationForm[field] = value;
      }
      console.log(this.registrationForm)
    },
  },
});

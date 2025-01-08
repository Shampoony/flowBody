import { defineStore } from 'pinia';

export const useRegisterStore = defineStore('register', {
  state: () => ({
    registrationForm: {
      gender: '',
      city: '',
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

export const validateNumber = (value) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(value);
  };

  
export const saveData = () => {
  if (!validateNumber(number.value)) {
    return true
  }

  store.updateFormField('number', number.value);
  store.updateFormField('password', password.value);

  /* // Переход на следующий шаг
  router.push({ name: 'registration-step-2'}); */

  return false
};
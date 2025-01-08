import axios from 'axios';
const apiUrl = 'https://b6c5-94-158-60-244.ngrok-free.app';

export async  function getToken(tg_id) {
    console.log(tg_id)
    try {
        // Отправляем данные на сервер
        const response = await axios.post(`${apiUrl}/api/user/check_user/${tg_id}`);
    
        // Получаем токен и сохраняем его
      /*   localStorage.setItem('user', response.data) */
        console.log(response)
       
        /* const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken); */
    
        // Переходим к следующему шагу
       /*  router.push({ name: 'registration-step-3' }); */
      } catch (error) {
        console.error( error.response?.data?.message || 'Ошибка регистрации. Попробуйте снова.')
      }
}

export async  function updateUser(tg_id, requestData) {
    try {
        // Отправляем данные на сервер
        const response = await axios.put(`${apiUrl}/api/user/check_user/${tg_id}`, requestData);
    
        console.log(response)
      } catch (error) {
        console.error( error.response?.data?.message || 'Ошибка регистрации. Попробуйте снова.')
      }
}
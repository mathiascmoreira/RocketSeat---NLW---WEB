import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:3333`  //Uma das vantagens de se usar o axios é a possibilidade de setar uma baseURL, sem a necessidade de repeti-la em todo o código
})

export default api;
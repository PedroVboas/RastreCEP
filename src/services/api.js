import axios from 'axios';

const api = axios.create({ /*Axios é um cliente HTTP baseado em promessas para o node.js e para o navegador. É isomórfico (= pode rodar no navegador e no node.js com a mesma base de código). No lado do servidor usa o código nativo do node.js - o modulo http, enquanto no lado do cliente (navegador) usa XMLHttpRequests. */
    baseURL: 'http://viacep.com.br/ws/'
});
export default api;
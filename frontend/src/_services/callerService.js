// https://laravel.com/docs/10.x/sanctum#spa-authentication
import axios from 'axios';

axios.defaults.withCredentials = true;
const Axios = axios.create({
    baseURL: "https://woodstockmanager-production.up.railway.app",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache',
    }
});

export default Axios;
import axios from 'axios';
// import Cookies from 'js-cookie';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const token = Cookies.get('token');

axios.defaults.baseURL = `${BASE_URL}`;
// axios.defaults.headers.Authorization = `Bearer ${token}`;
axios.defaults.withCredentials = true;

export default axios;

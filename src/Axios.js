import Axios from 'axios';


// Axios.defaults.baseURL = 'https://newinv.musafirbazar.com/api/';

// Axios.defaults.baseURL = 'https://rms-yzpc.onrender.com/login/user';
Axios.defaults.baseURL = 'https://loofer.bellazza.in/api';

export const axiosInstance = Axios.create({});


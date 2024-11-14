import axios from "axios";
// import { getItem } from '../storage/storage'

const baseURL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(opt => {
    // const token = getItem("token") ? getItem("token") : null;

    // if (token) opt.headers.Authorization = 'Bearer ' + token;
    return opt
})

const onSuccess = (response) => {
    return response.data
}

const onError = (err) => {

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);


export default instance;

import axios from "axios";
import { useUserStore } from "../../store/user";

const service = axios.create({
    withCredentials: true,
});

//2. 请求拦截器
service.interceptors.request.use(config => {
    //通过header传递token
   if(useUserStore().token){
       config.headers['Authorization'] = useUserStore().token;
   }
    return config;
}, error => {
    Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
    //判断code码
    return response.data;
},error => {
    return Promise.reject(error);
});

export default service;
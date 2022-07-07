import { defineStore } from 'pinia';

export const useUserStore = defineStore('main', {
    id:'user',
    state: () => {
        return {
            token: '',//token
            userInfo:{}//用户信息
        }
    },
    actions:{
        setToken(token){
            this.token = token;
        },
        setUserInfo(userInfo){
            this.userInfo = userInfo;
        }
    },
    persist: {
        enabled: true,//开启数据缓存 -->session
        strategies: [
            {
                key: 'xiaoluxian_user',//localStorage的key
                storage: localStorage,
            },
        ],
    },
})
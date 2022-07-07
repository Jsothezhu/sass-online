import request from "../api/request"

export function login(data){
    return request("/api/u/loginByJson",{
        method:'post',
        data
    })
}
export function sendCaptcha (params){
    return request("/api/sms/sendRegisterOrLoginCaptcha",{
        method:'get',
        params
    })
}
export function loginByMobile(data){
    return request('/api/u/loginByMobile',{
        method:'post',
        data
    })
}
export function logout(){
    return request('/api/u/logout',{
        method:'get',
    })
}
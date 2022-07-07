import request from './request'
//获取轮播图
export function swiperImg(){
    return request('/api/slider/getSliders',{
        method:'get'
    })
}
//获取一级分类
export function getFirstCategorys(){
    return request('/api/course/category/getFirstCategorys',{
        method:'get'
    })
}
//获取二级分类
export function getSecondCategorys(categoryId){
    return request('/api/course/category/getSecondCategorys',{
        method:'get',
        params:{
            categoryId:categoryId
        }
    })
}
//获取最新课程
export function getMostNew(data){
    return request({
        url:'/api/course/mostNew',
        method:'post',
        data,
    })
}
//获取底部数据
export function getSet(){
    return request('/api/setting/get',{
        method:'get'
    })
}
//获取个人信息
export function getInfo(){
    return request('/api/member/getInfo',{
        method:'get'
    })
}
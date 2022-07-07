import request from "./request";
//搜索课程
export function searchCourse(data){
    return request('/api/course/search',{
        method:'post',
        data
    })
}
//课程详情
export function getCourseDetail( params ){
    return request('/api/course/getDetail',{
        method:"get",
        params
    })
}
//检查是否有下载权限
export function courseCheckAuth( params ){
    return request({
        url:'/api/course/checkAuth',
        params
    })
}
//下载课程资料
export function downloadAttachment( params ){
    return request({
        url:'/api/course/downloadAttachment',
        params,
        responseType: 'blob',
    })
}
//获取视频
export function player( params ){
    return request({
        url:'/api/player/play',
        params,
    })
}
//存储播放记录
export function recordHistory(data){
    return request('/api/course/history/recordHistory',{
        method:'post',
        data
    })
}
//获取最后的记录
export function getLastHistoryByChapterId( params ){
    return request('/api/course/history/getLastHistoryByChapterId',{
        method:"get",
        params
    })
}


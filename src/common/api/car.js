import request from "./request";

export function getShopCarList( ){
    return request('/api/shopcar/getShopCarList',{
        method:"get",
    })
}
//删除购物车
export function deleteShopCar( params ){
    return request('/api/shopcar/deleteShopCar',{
        method:"get",
        params
    })
}

//去结算,该接口可以生成订单
export function settlement( data ){
    return request('/api/order/settlement',{
        method:"post",
        data
    })
}

export function wxpay( data ){
    return request('/api/pay/wxpay/createOrder',{
        method:"post",
        data
    })
}
export function alipay( data ){
    return request('/api/pay/alipay/createOrder',{
        method:"post",
        data
    })
}
//查询支付宝，支付订单状态
export function queryOrderWithAli( params ){
    return request('/api/pay/alipay/queryOrder',{
        method: 'get',
        params
    })
}
//查询微信，支付订单状态
export function queryOrderWithWX( params ){
    return request('/api/pay/wxpay/queryOrder',{
        method: 'get',
        params
    })
}
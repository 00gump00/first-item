//接口统一管理所有接口
import requests from './request'
import mockRequest from './mock'

//1.三级联动接口
export const requestCAteList=()=>{
 return requests({url:'/product/getBaseCategoryList',method:'get'})//promise对象
}
export const requestMock=()=>{
  return mockRequest({url:'/banner',method:'get'})//promise对象
 }
export const reqFloorList=()=>{
  return mockRequest({url:'/floor',method:'get'})//promise对象
}
//search模块接口
//params最少是一个空对象
export const reqSearchList=(params)=>{
  return requests({url:'/list',method:'post',data:params})
}
//商品详情接口
export const getgoodsInfo=(skuId)=>{
  return requests({url:`/item/${skuId}`,method:'get'})
}
//向服务器发送商品参数和商品数量
export const addSkuNum=(skuId,skuNum)=>{
  return requests({url: `/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
}
//获取购物车信息/api/cart/cartList
export const reqCartList=()=>{
  return requests({url:'/cart/cartList',method:'get'})
}
//删除某个商品
export const reqDeleteCar=(skuId)=>{
  return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
}
//修改商品状态
export const reqFixIschecked=(skuId,isChecked)=>{
  return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}
//获取验证码
export const reqGetCode=(phone)=>{
  return requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
}
//用户注册
export const reqRegist=(data)=>{
  return requests({url:`/user/passport/register`,data,method:'post'})
}
//用户登录
export const reqLogin=(data)=>{
  return requests({url:'/user/passport/login',data,method:'post'})
}
//获取用户信息
export const reqGetuserInfo=()=>{
  return requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
}
//退出登录
export const reqLogout=()=>{
  return requests({url:'/user/passport/logout',method:'get'})
}
//获取用户地址
export const reqGetAdress=()=>{
  return requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
}
//获取用户订单信息
export const reqGetddan =()=>{
  return requests({url:'/order/auth/trade',method:'get'})
}
//提交订单/order/auth/submitOrder?tradeNo={tradeNo}
export const reqPay=(tradeNo,data)=>{
  return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
}
  

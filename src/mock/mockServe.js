import mock from 'mockjs'
import banner from './banner'
import floor from './floor'
//第一个参数是请求地址，第二个参数是{成功码，数据}
mock.mock('/mock/banner',{code:200,data:banner})
mock.mock('/mock/floor',{code:200,data:floor})
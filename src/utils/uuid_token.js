import { v4 as uuidv4 } from 'uuid'
export const getuuid = () => {
  let uuid_token = localStorage.getItem('UUID')
  //如果本地存储里没有uuid_token，将用uuidv4生成
  if (!uuid_token) {
    uuid_token = uuidv4()
    localStorage.setItem('UUID', uuid_token)
  }
  console.log('----');
  console.log(localStorage.getItem('UUID'));
  return uuid_token
  
}
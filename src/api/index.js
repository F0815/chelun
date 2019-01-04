import JSBridge from '@/utils/JSBridge.js';
//封装请求方法
function sendRequest(url,method='GET',data={}){
  let params={
    method
  }
  //判断是否是post请求，带上请求体信息
  if(method=='POST'){
    params.body=JSON.stringify(data);
  }
  //判读那是否带query
  if(url.indexOf('?')==-1){
    url+=`?_=${+new Date()}`
  }else{
    url+=`$_=${+new Date()}`
  }
  //拼接登录token
  return fetch(url,params)
  .then(res=>res.json())
  .then(body=>body);

}


// 图片上传
export let uploadImg = (type)=>{
  return new Promise((resolve, reject)=>{
    JSBridge.invoke('device', 'chooseImage', {
      type,
      chooseCallbackName: function(res){
        resolve(res);
      }
    })
  })
}
//签发城市
export let cityList=()=>{
  return sendRequest('/api/ExchangeJiaZhao/cityList')
}
export let constList=(...params)=>{
  return sendRequest(`api/ExchangeJiaZhao/getCostList?order_type=${params.order_type}&city_id=${params.city_id}&province_id=${params.pro_id}`
 )
}
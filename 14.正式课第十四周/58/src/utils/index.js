function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export function http(url,params={},type='GET'){
  let baseURL = 'http://localhost:3000';
  return new Promise((res,rej)=>{
    wx.request({
      url: baseURL+url, //仅为示例，并非真实的接口地址
      type: type ? type.toUpperCase() : "GET",
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (data) {
        if(data.data.code===0){
          res(data)
        }else{
          wx.showToast({
            title: '系统繁忙',
            icon: 'error',
            duration: 2000
          })
          rej(data);
        }
        
      },
      fail(err){
        console.log(err)
        wx.showToast({
          title: '系统繁忙',
          icon: 'error',
          duration: 2000
        })
        rej(err);
      }
    })
  })
}
http.get = function (url,params) {
  return http(url,params,"GET")
}
http.post = function (url,params) {
  return http(url,params,"POST")
}

export default {
  formatNumber,
  formatTime,http
}

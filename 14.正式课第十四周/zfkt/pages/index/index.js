
import http from "../../utils/http"
// const app = getApp()
console.log(33)
Page({
    data: {
        bannerList: [],
        showKnow:false,
        showzf:false,
        classList:[]
    },
    onLoad: function () {
        //created
        // console.log(1);
        // 在onLoad发送请求，获取数据；
        this.getBanner();
        this.getPublicClass();
    },
    getBanner() {
        http.get("/banner").then(data => {
        console.log(data)
            if (data.code == 0) {
                this.setData({
                    bannerList: data.data
                })
            }
        })
    },
    getPublicClass(){
        http.get("/publicList").then(data=>{
            if(data.code==0){
                this.setData({
                    classList:data.data
                })
            }
        })
    },
    showKnow(){
        // 在小程序中事件名和data中的数据可以重名，事件会默认匹配事件；
        // 更改data中的数据
        this.setData({
            showKnow:true
        });
    },
    closeKnow(){
        this.setData({
            showKnow:false
        })
    },
    showzf(){
        this.setData({
            showzf:true
        });
    },
    closezf(){
        this.setData({
            showzf:false
        })
    }
})

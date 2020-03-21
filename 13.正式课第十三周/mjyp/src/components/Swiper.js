import React,{useEffect}from "react";
import Swiper from "swiper";
import "swiper/css/swiper.css";
import "./Swiper.less";
function Banner(props){
        // console.log(props);
        let data=props.data||[];
        useEffect(()=>{
                // 当DOM加载完毕执行；
                if(data.length===0)return;
                new Swiper(".swiper-container",{
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        autoplay: {
                                delay: 3000,
                                stopOnLastSlide: false,
                                disableOnInteraction: true,
                        }
                });
        })
        return <div className="swiper-container">
                        <div className="swiper-wrapper">
                                {data.map((item,index)=>{
                                        return <div className="swiper-slide" key={index}>
                                                <img src={item.url}></img>
                                        </div>
                                })}
                        </div>
                        <div className="swiper-pagination"></div>
            </div>
    }
export default Banner;
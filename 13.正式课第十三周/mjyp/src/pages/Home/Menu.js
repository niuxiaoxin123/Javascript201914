import React from "react";
import "./Menu.less";
function Menu(props){
    let {activity=[]}=props;
    return <div className="link-box">
          {activity.map((item,index)=>{
              return <div  className="react-view"  key={index}>
                  <img src={item.url}></img>
              </div>
          })}
    </div>
}
export default Menu;
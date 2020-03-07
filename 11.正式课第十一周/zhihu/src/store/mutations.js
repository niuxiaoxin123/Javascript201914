export function changeHotList(state,option){
    // 如果上次的请求的type和这次是一样的，那么需要将数据push到最后；
    if(option.newType===option.oldType){
        state.hotList.push(...option.data);
    }else{
        state.hotList=option.data;
    }
    // console.log(option.data);
    // state.hotList=option.data;
}
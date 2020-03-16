import * as types from "../action-type";
export default {
    add(){
        // 这个地方要发请求的;
        return {type:types.ADD_COUNT}
    },
    min(){
        return {type:types.MIN_COUNT}
    }
}
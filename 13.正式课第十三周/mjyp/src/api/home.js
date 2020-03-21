import axios from "./axios";
// home初始化的接口
function quertInit(){
    return axios.post("/init");
}
function queryMain(id="G0001"){
    return axios.post("/main",{id})
}
export default {
    quertInit,
    queryMain
}
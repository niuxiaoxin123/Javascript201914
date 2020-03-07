import http from "./http.js";
export function hotList(option){
    // 请求知乎的热榜数据
    return http.get("/v4//mweb-feed/content/list",{params:option})
} 
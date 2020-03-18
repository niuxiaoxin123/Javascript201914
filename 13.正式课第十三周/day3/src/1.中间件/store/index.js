import {createStore,applyMiddleware} from "redux";
import reducer from "./reducer/index.js";
import logger from "redux-logger";// 能够在控制台直观的看到更改状态的type类型以及更改状态前后的值;
import reduxThunk from "redux-thunk";// 能够让redux中的action支持异步；
import reduxPromise from "redux-promise";
// 1. 导入中间件
// 2. 使用中间件
let store = createStore(reducer,applyMiddleware(logger,reduxThunk,reduxPromise));
export default store;
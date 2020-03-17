import {createStore} from "redux";
import reducer from "./reducers/index.js";
let store = createStore(reducer);
export default store;
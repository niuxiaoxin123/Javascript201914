import {combineReducers} from "redux";
import counter from "./counter.js";
let reducer = combineReducers({
    counter:counter
});
export default reducer;
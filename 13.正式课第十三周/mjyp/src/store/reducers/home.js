import * as Types from "../action-types";
let initState={
    sliders:null
}
function homeReducer(state=initState,action){
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case Types.HOME_INIT:
            let {sliders=[],activity=[]}=action.initData;
            state.sliders=sliders;
            state.activity=activity;
            break;
        case Types.HOME_HOT:
            state.hotData=action.data;
            break;
    }
    return state;
}
export default homeReducer;
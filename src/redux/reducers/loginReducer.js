import { act } from "react-dom/test-utils";
import { actionTypes } from "../constants/actionTypes";

export const loginReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.LOGIN:
            return {...state, loginUsername: payload, loginStatus: true}
        case actionTypes.LOGOUT:
            return {...state, loginUsername: '', loginStatus: false}
        default:
            return state;
    }
}


export const signupReducer = (state = {} , action )=>{

    const {type , payload} = action;

    switch (type) {
        case actionTypes.SIGNIN:
            return {...state , signupUsername : payload , signupStatus : true}
        case actionTypes.LOGOUT:
            return {...state , signupStatus : false }
        default:
            return state;
    }
}
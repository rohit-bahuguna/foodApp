
import { actionTypes } from "../constants/actionTypes";

export const loginUser = (username) => {
    return {
        type: actionTypes.LOGIN,
        payload: username
    }
}

export const usersignup = (username) => {
    return {
        type:actionTypes.SIGNIN,
        payload: username
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT,
    }
}
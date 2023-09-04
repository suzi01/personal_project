import { loginUser } from "./services/profileService";

export const loginCall = async (details, dispatch) => {
    dispatch({type:"LOGIN_START"})
    try{
        const res = await loginUser(details)
        dispatch({type: "LOGIN_SUCCESS", payload: res})
    } catch(err){
        dispatch({type:"LOGIN_FAILURE", payload: true})
    }
}

export const logoutCall = async (dispatch) => {
    dispatch({type:"LOG_OUT"})
    localStorage.clear()
}
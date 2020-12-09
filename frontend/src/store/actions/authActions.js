import * as actionTypes from '../actionTypes'
import axios from 'axios'

const isAuthenticated = (id, username) => {
    return {
        id: id,
        username: username,
        type: actionTypes.IS_AUTHENTICATED
    }
}

export const isError = () => {
    return {
        type: actionTypes.IS_ERROR
    }
}

export const authSignUp = (email, username, password, history) => {
    return (dispatch) => {

        axios.post("/api/v1/sign-up", { email, username, password })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    
                    dispatch(isAuthenticated(res.data._id, res.data.username))
                    localStorage.setItem("authToken",res.data.token)
                    
                    history.push("/profile")
                } else {
                    dispatch(isError())
                }
            })
            .catch((error) => { console.log(error) })
    }
}


const isLogin = (id, username) => {
    return {
        id: id,
        username: username,
        type: actionTypes.IS_LOGGED_IN
    }
}
export const authLogin = (username, password, history) => {
    return (dispatch) => {

        axios.post("/api/v1/login", { username, password })
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    
                    dispatch(isLogin(res.data._id, res.data.username))
                    localStorage.setItem("authToken",res.data.token)
                  
                    history.push("/profile")
                } else {
                    dispatch(isError())
                }
            })
            .catch((error) => { console.log(error) })
    }
}
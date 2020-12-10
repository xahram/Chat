import * as actionTypes from '../actionTypes'
const initialState = {
    isAuthenticated: false,
    userId: "",
    username: "",
    error: false
}

const authStore = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_AUTHENTICATED:
            return { ...state, isAuthenticated: true, id: action.id, username: action.username }
        case actionTypes.IS_LOGGED_IN:
            return { ...state, isAuthenticated: true, id: action.id, username: action.username }
        case actionTypes.IS_ERROR:
            return { ...state, error: true }
        default:
            return state;
    }
}
export default authStore
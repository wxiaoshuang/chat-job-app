import axios from 'axios';
const LOGIN = 'LOGIN';
const LOGINOUT = 'LOGINOUT';
const USER_DATA = 'USER_DATA';
const initState = {
    isAuth: false
}
// reducer
function auth(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, isAuth: true };
        case LOGINOUT:
            return { ...state, isAuth: false };
        case USER_DATA:
            return {...state, isAuth: true, name: action.payload.name,age: action.payload.age }
        default:
            return state;

    }
}
// 异步action
function getUserData() {
    return dispath => {
        axios.get('/dataOne').then(r => {
            dispath(userData(r.data))
        })

    }
}
function userData(data) {
    return { type: USER_DATA, payload: data };
}
export {auth, getUserData};
import axios from 'axios'
import {getRedirectPath} from "../utils/util"
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    isAuth: false,
    redirectTo: '',
    user:'',
    pwd:'',
    rePwd: '',
    type: ''
}
// reducer
export function user(state = initState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, isAuth: true, redirectTo: getRedirectPath(action.payload) ,...action.payload}
        case LOGIN_SUCCESS:
            return {...state, isAuth: true, redirectTo: getRedirectPath(action.payload) ,...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.payload.msg}
        default:
            return state
    }
}
// async action
export function login({user, pwd}) {
    if(!user || !pwd ) {
        return errorMsg('请将信息填写完整');
    }
    return dispatch => {
        axios.post('/user/login', {user,pwd}).then(r => {
            if(r.data.code === 0) {
                dispatch(loginSuccess(r.data))
            } else {
                dispatch(errorMsg(r.data.msg))
            }
        })
    }
}
// 注册先验证字段的合理性, 再向后端发送接口
export function register({user, pwd, rePwd, type}) {
    if(!user || !pwd || !rePwd) {
        return errorMsg('请将信息填写完整');
    }
    if(pwd !== rePwd) {
        return errorMsg('两次输入的密码不一致');
    }
    return dispatch => {
        axios.post('/user/register', {user,pwd,type}).then(r => {
            if(r.data.code === 0) {
                dispatch(registerSuccess(r.data))
            } else {
                dispatch(errorMsg(r.data.msg))
            }
        })
    }
}
// action
function registerSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data}
}
function loginSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data}
}
function errorMsg(msg) {
    return {type: ERROR_MSG, payload: msg}
}
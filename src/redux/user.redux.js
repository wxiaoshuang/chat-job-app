import axios from 'axios'
import {getRedirectPath} from "../utils/util"
// 登陆,注册以及更新用户信息都可以统一用AUTH_SUCCESS
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState = {
    isAuth: false,
    redirectTo: '',
    user:'',
    type: ''
}
// reducer
export function user(state = initState, action) {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {...state, isAuth: true, redirectTo: getRedirectPath(action.payload) ,...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
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
                dispatch(authSuccess(r.data.data))
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
                dispatch(authSuccess(r.data.data))
            } else {
                dispatch(errorMsg(r.data.msg))
            }
        })
    }
}
// params {icon, company, title, money, desc}
export function updateUserInfo(data) {
    return dispatch => {
        axios.post('/user/update', data).then(r => {
            if(r.data.code === 0) {
                dispatch(authSuccess(r.data.data))
            } else {
                dispatch(errorMsg(r.data.msg))
            }
        })
    }

}
// sync action
function authSuccess(obj) {
    let {pwd, ...data} = obj;
    return {type: AUTH_SUCCESS, payload: obj}
}
export function errorMsg(msg) {
    return {type: ERROR_MSG, payload: msg}
}
export function loadUserData(data) {
    return {type: LOAD_DATA, payload: data}
}

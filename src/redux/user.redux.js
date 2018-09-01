import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const initState = {
    isAuth: false,
    user:'',
    pwd:'',
    rePwd: '',
    type: ''
}
// reducer
export function user(state = initState, action) {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, isAuth: true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.payload.msg}
        default:
            return state
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
function registerSuccess({user,pwd,type}) {
    return {type: REGISTER_SUCCESS, payload: {user,pwd,type}}
}
function errorMsg(msg) {
    return {type: ERROR_MSG, payload: msg}
}
import {combineReducers} from 'redux';
import {auth} from './auth';
import { counter } from './counter'
// 将不同模块的reducer合并为一个对象
const reducers = combineReducers({auth,counter});
export default reducers;
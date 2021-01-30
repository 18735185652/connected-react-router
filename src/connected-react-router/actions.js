import {CALL_HISTORY_METHOD,LOCATION_CHANGE} from './action-types'

/**
 * 这是一个用来跳转路径的actionCreator
 * @param {*} path  
 */
export function push(path){
    return {
        // history.push(...args)
        type:CALL_HISTORY_METHOD, // 调用历史对象的方法
        payload: { // 携带的额外的数据
            method:'push',
            args:[path]
        }
    }
}


export function locationChange(location,action){
   return {
       type:LOCATION_CHANGE,
       payload:{
            location,
            action
       }
   } 
}


import {CALL_HISTORY_METHOD} from './action-types'

function routerMiddleware(history){
    return function(middlewareAPI){ // {getState,dispatch}
        return function(next){ // 调用下一个中间件
            return function(action){ // 派发的动作
                if(action.type !== CALL_HISTORY_METHOD){ // 如果不是要跳转路径 走下一步
                  return next(action)
                }
                const {payload:{method,args}} = action;
                history[method](...args);
            }
        }
    }
}

export default routerMiddleware;
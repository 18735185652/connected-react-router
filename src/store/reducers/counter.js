import * as types from '../action-types';

const initState={number:1}
function counter (state=initState,action){
    switch(action.type){
        case types.ADD :
            return {number:state.number+1}
        default :
           return state
    }
}

export default counter
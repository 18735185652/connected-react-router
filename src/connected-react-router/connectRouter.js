import {LOCATION_CHANGE}from './action-types'

function connectRouter(history){
    const initialState= {
        location:history.location,
        action:history.action
    }

    return function(state=initialState,action){
        switch(action.type){
            case LOCATION_CHANGE :
                return {...state,...action.payload}
            default :
                return state;
        }
    }
}

export default connectRouter;
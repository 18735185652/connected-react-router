import {createStore,applyMiddleware} from 'redux'
import history from '../history';
import {routerMiddleware} from 'connected-react-router'
import rootReducer from './reducers';

const store = applyMiddleware(routerMiddleware(history))(createStore)(rootReducer)

export default store

/**
 * routerMiddleware作用是拦截跳转路径的action
 */
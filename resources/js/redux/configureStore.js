import {createStore, combineReducers, applyMiddleware} from 'redux'
import {UserInfo} from './data'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            userinfo: UserInfo
        }),
        applyMiddleware(thunk, logger)
    )
    return store;
}

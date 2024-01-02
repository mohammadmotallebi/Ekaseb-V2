import * as ActionTypes from './ActionTypes'

export const UserInfo = (state = {isLoading: true, errMess: null, userinfo: []}, action) => {
    switch (action.type) {
        case ActionTypes.USER_INFO :
            return {...state, isLoading: false, errMess: null, userinfo: action.payload}
        case ActionTypes.USER_LOADING :
            return {...state, isLoading: true, errMess: null, userinfo: []}
        case ActionTypes.USER_ERROR :
            return {...state, isLoading: false, errMess: action.payload, userinfo: []}
        default :
            return state
    }

}

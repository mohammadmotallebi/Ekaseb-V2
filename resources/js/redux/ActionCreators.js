import * as ActionTypes from './ActionTypes'

export const userLoading = () => ({
    type: ActionTypes.USER_LOADING
})

export const userError = errMess => ({
    type: ActionTypes.USER_ERROR,
    payload: errMess
})

export const userInfo = userinfo => ({
    type: ActionTypes.USER_INFO,
    payload: userinfo
})

export const fetchUserInfo = () => dispatch => {
    dispatch(userLoading(true))
    fetch(`get-user-info`)
        .then(res => res.json())
        .then(info => {
            dispatch(userInfo(info))
        })
}



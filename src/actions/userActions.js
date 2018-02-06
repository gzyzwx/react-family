import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL
} from "containers/actionsNames.js"


function getUserInfoRequest() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}

function getUserInfoSuccess(userInfo) {
    return {
        type: GET_USER_INFO_SUCCESS,
        userInfo: userInfo
    }
}

function getUserInfoFail() {
    return {
        type: GET_USER_INFO_FAIL
    }
}
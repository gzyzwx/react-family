import counter from './countsReducers.js';
import userInfo from './userInfoReducers.js'

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        userInfo: counter(state.userInfo, action)
    }
}
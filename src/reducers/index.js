import counter from './countsReducers.js';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action)
    }
}
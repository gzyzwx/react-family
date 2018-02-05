import {
    INCREMENT,
    DECREMENT,
    RESET
} from "containers/actionsNames.js"

export function increment() {
    return {type: INCREMENT}
}

export function decrement() {
    return {type: DECREMENT}
}

export function reset() {
    return {type: RESET}
}
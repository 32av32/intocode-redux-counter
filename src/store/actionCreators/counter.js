import {RESET, MINUS, PLUS} from "../actions/counter";


function plusAction() {
    return {
        type: PLUS
    }
}
function minusAction() {
    return {
        type: MINUS
    }
}
function resetAction() {
    return {
        type: RESET
    }
}

export {plusAction, minusAction, resetAction}
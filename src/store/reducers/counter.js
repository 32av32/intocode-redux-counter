import initialState from "../initialState";
import { PLUS, MINUS, RESET } from '../actions/counter'

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return {...state, count: state.count + 1}
        case MINUS:
            if (state.count > 0) {
                return {...state, count: state.count - 1}
            }
            return state
        case RESET:
            return {...state, count: 0}
        default:
            return state
    }
}

export default counterReducer
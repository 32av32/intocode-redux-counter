import initialState from "../initialState";

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'plus':
            return {...state, count: state.count + 1}
        case 'minus':
            if (state.count > 0) {
                return {...state, count: state.count - 1}
            }
            return state
        case 'reset':
            return {...state, count: 0}
        default:
            return state
    }
}

export default counterReducer
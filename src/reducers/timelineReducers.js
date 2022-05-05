import * as Constants from '../constants'

const INIT_STATE = {
    timelineData: null,
    timelineError: null
}

const reducerCases =  (state = INIT_STATE, action) => {
    switch (action.type) {
        case Constants.TIMELINE_DATA:
            return Object.assign({}, state, {
                timelineData: action.data
            })
        case Constants.TIMELINE_ERROR:
            return Object.assign({}, state, {
                timelineError: action.data
            })
        default:
            return state;
    }
}

export default reducerCases;
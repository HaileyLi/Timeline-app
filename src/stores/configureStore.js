import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

const loadStoreFn =  loadStore => {
    const store = createStore(
        rootReducer,
        loadStore,
        applyMiddleware(thunk, logger)
    )
    return store;
}
export default loadStoreFn;
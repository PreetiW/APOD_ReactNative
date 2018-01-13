import { createStore, applyMiddleware } from 'redux';
import apodApp from '../reducers'
// Logger with default options
import logger from 'redux-logger'

const store = createStore( apodApp,
    applyMiddleware(logger)
)

export default store;
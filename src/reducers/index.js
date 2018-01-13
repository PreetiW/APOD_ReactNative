import { combineReducers } from 'redux';
import apod from './apod';

const apodApp = combineReducers({
    apod
})

export default apodApp
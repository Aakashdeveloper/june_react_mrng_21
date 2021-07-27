import {combineReducers} from 'redux';
import films from './moviesReducer';

const rootReducer = combineReducers({
    films
})

export default rootReducer;
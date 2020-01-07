import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';

export default combineReducers({
    header:headReducer
});
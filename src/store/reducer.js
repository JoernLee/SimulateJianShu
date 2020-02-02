import {combineReducers} from 'redux-immutable';
import {reducer as headReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';


export default combineReducers({
    header:headReducer,
    home:homeReducer
});
/**
 * Created by dinhceo on 08/04/2017.
 */
import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';


const appReducers = combineReducers({
    visibilityFilter,
    todos
});

export default appReducers;
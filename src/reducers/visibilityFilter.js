/**
 * Created by dinhceo on 08/04/2017.
 */
import {SET_VISIBILITY_FILTER, VisibilityFilters} from '../actions/searchTodoType';

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;
        default:
            return state;
    }
}

export default visibilityFilter;

/**
 * Created by dinhceo on 08/04/2017.
 */
import {ADD_TODO, TOGGLE_TODO, RESET_TODO} from '../actions/todoActionType';


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text : action.text,
                    completed : false
                }
            ];
            break;
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed : !todo.completed
                    })
                }
                return todo;
            });
            break;
        case RESET_TODO:
            return [];
            break;
        default:
            return state;
    }
}

export default todos;
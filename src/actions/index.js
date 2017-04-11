/**
 * Created by dinhceo on 08/04/2017.
 */
import {ADD_TODO, TOGGLE_TODO, RESET_TODO} from './todoActionType';
import {VisibilityFilters, SET_VISIBILITY_FILTER} from  './searchTodoType';


export function addTodo(text) {
    return {
        type : ADD_TODO,
        text
    }
}

export function resetTodo() {
    return {
        type : RESET_TODO
    }
}

export function toggleTodo(index) {
    return {
        type : TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type : SET_VISIBILITY_FILTER,
        filter
    }
}
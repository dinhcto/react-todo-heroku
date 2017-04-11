/**
 * Created by dinhceo on 11/04/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import AddTodoComponent from '../components/addTodo/addTodoComponent'
import {addTodo, toggleTodo} from '../actions/index'


const mapStateToProps = (state) => ({
    name : 'dinhceo'
});

const mapDispatchToProps = (dispatch) => ({
    addTodo : (text) => {
        dispatch(addTodo(text))
    },
    active : (index) => {
        dispatch(toggleTodo(index))
    }
});

const todoContainer = connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);

export default todoContainer;



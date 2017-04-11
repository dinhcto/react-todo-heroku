/**
 * Created by dinhceo on 11/04/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {setVisibilityFilter} from '../../actions/index'
import {resetTodo} from '../../actions/index'
import {VisibilityFilters} from '../../actions/searchTodoType'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    float : 'right'
};

class FilterTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(filter) {
        let {dispatch} = this.props;
        dispatch(setVisibilityFilter(filter));
    }

    handleReset() {
        let {dispatch} = this.props;
        dispatch(resetTodo());
    }


    render() {

        return (
            <div>
                <FlatButton label="All" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_ALL)
                }} primary={true}/>

                <FlatButton label="Active" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_ACTIVE)
                }} primary={true}/>

                <FlatButton label="Completed" onClick={() => {
                    this.handleClick(VisibilityFilters.SHOW_COMPLETED)
                }} primary={true}/>
                <RaisedButton style={style} onClick={() => {
                    this.handleReset()
                }} className="btn-add-todo" type="button" label="Reset todo" primary={true}/>

            </div>
        );
    }
}

export default connect()(FilterTodo);
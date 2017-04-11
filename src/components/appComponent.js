/**
 * Created by dinhceo on 11/04/2017.
 */
import React from 'react'
import Header from './header/headerComponent'
import AddTodo from './addTodo/addTodoComponent'
import ListTodo from './todos/listTodoComponent'
import FilterTodo from './filterTodo/filterTodoComponent'
import Footer      from './footer/footerComponent'
import LinearProgress from './LinearProgressComponent/index';

const style = {
    marginTop : 100
};


const App = () => (
    <div className="container-fluid">
        <Header />
        <div className="row">
            <div className="col-md-4"/>
            <div className="col-md-6">
                <br/>
                <AddTodo />
                <ListTodo />
                <FilterTodo />
            </div>
            <div className="col-md-2"/>
        </div>
        <div className="row" style={style}>
            <Footer />
        </div>
    </div>
);

export default App
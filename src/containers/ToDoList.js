import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {

    return(
        <ul>

        </ul>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);
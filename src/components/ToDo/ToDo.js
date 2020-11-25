import React from 'react';
import { connect } from 'react-redux';
import { toggleToDo } from '../../actions';

const ToDo = ({ id, todo, completed }) => {
    return(
        <li>
            {todo}
        </li>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleToDo: id => dispatch( toggleToDo(id) )
})

export default connect(null, mapDispatchToProps)(ToDo);
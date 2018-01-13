import React from "react";
import propTypes from 'prop-types'


//destruturing our react object in onClicj function, completed boolean and the item todo text
const Todo = ({onClick, completed,text}) => {
    <li
        onClick = {onClick}
        style={{ textDecoration:completed ? 'line-through' : 'none' }}
    >
     {
         //print tex
         text
     }
    </li>
}

//add some validation with prop-types


Todo.propTypes = {
    onClick:propTypes.func.isRequired,
    completed:propTypes.bool.isRequired,
    text:propTypes.string.isRequired
}

//export 
export default Todo;
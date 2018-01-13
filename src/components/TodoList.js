/**
 * This is parent component of our todo item
 */

import React from "react";//react libreary
import PropTypes from "prop-types";
import Todo from "./Todo";


//destructuring our object 
/**
 * 
 * @param {arrys} todos arrays of all todo items 
 * 
 */
const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        { todos.map(todo => 
            <Todo key={todo.id}  {...todo} onClick={ () => onTodoClick(todo.id) } />

        )}
    </ul>
)


//add some validations through prop-types
TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            completed:PropTypes.bool.isRequired,
            text:PropTypes.string.isRequired
        })
    ).isRequired,
    onTodoClick : PropTypes.func.isRequired
}

//export TodoList Object
export default TodoList;
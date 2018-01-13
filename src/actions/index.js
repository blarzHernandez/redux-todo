
//add todo item, receive the text
let nextTodoId = 0;
export const addTodo = text => {
    return {
        type:"ADD_TODO",//type of action
        id:nextTodoId++,//increase todo id
        text,//string of todo item
        completed:false//Manage if the item was completed or not, initially its false
    };
}


// we take the filter 
export const setVisibilityFilter = filter => {
    return{
        type:"SET_VISIBILITY_FILTER",
        filter
    };
}

export const toggleTodo = id =>{
    return{
        type:"TOGGLE_TODO",
        id
    }
}
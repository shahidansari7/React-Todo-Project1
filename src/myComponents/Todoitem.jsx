import React from 'react'

function Todoitem({ todo, ondelete }){
    return(
        <>
        <p>{todo.title}</p>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => ondelete(todo)}>Delete</button>
        
        </>
    );
}

export default Todoitem;
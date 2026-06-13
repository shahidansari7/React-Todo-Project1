import react from 'react'
import Todoitem from './Todoitem'
import proptypes from 'prop-types'

function Todos(props){
    return(
        <>
        <div className="container">
            <h1>Todos List</h1>
            {props.todos.map((todo)=>{
                return <Todoitem todo = {todo} key={todo.SN} ondelete = {props.ondelete}/>
            })}
        </div>
        </>
    )
    
}


export default Todos;
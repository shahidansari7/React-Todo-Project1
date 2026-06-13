import React from 'react'
import Todos from './Todos.jsx'
import Addto from './Addto.jsx'

import { useOutletContext } from 'react-router'


function Home(){
    const {todos, ondelete, addTodo} = useOutletContext();
    return( 
        <div className="container my-3">
            <h2>This my todo dashboard</h2>
        <Addto addTodo={addTodo} />
        <Todos todos={todos} ondelete={ondelete} />
         
      </div>
       
    )
}
export default Home;
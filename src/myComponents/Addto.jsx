import React, {useState} from 'react'
import proptypes from 'prop-types'

function Addto(props){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const add = (e)=>
          {
            e.preventDefault();
          
          if(!title || !desc){
            alert("Title or Description cannot be empty");
          
          }
          else
          props.addTodo(title, desc);
          setTitle("");
          setDesc("");
          }    
    return(
        <>
        <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
  </div>
  
  <button type="submit" onClick={add} className="btn btn-success btn-primary">Add Todo</button>
</form>
        </>
    )
}
export default Addto;
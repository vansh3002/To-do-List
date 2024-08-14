import React, { useState } from 'react'

export const AddTodo = (props) => {
    const[title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const submit=(e)=>{
        e.preventDefault(); //ensure page not reloaded when submit button pressed
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            //else condition to ensure no blank to do add
            props.addtodo(title,desc);
            // use state is uses
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my=3" >
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                    <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}



import React from 'react'
import {Todoitem} from './Todoitem';
// use ../My components/Todoitem dot double time or direct./Todoitem
export const Todos = (props) => {
  let mystyle={
    minHeight:"70vh",
    margin: "40px auto"
  }
  return (
    //my-3=give margin of 3 from top a
    <div className='container' style={mystyle}>
      <h3 className='my-3'>Todos List</h3>
      {/* {props.todos} */}
      
      {props.todo.length===0 ? "No todos to display" : 
      props.todo.map((t)=>{
        return(
          <>
           <Todoitem todo={t} key={t.sno} onDelete={props.onDelete}/><hr/>
          </> 
        )    
      })}
      
      
      {/* A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
      Calls a defined callback function on each element of an array, and returns an array that contains the results. */}
      
      
      
      {/* {props.todo.map((t)=>{
        // to add someting in it it need to wrap in some nested tage otherwise it give an error
       //--->one approach
        // return (<>
        // vansh
        // <Todoitem todo={t}/>
        // </>)

        //-->if just want to return array then second approach
        return <Todoitem todo={t} key={t.sno} onDelete={props.onDelete}/>
        // whenever map method is used to enter render something in ui using array we need to assign unique key
      
        //-->now to pass some value in ondelete
        
      })} */}
      {/* <Todoitem todo={props.todo[0]}/> */}
    </div>
  )
}



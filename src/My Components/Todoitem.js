import React from 'react'

// also props can be used just then accesing is possible using props.onDelete
export const Todoitem= ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* <button className='btn btn-sm btn-danger' onClick={onDelete}>Delete</button> */}
      {/* now pass some value in ondelete */}
      {/* <button className='btn btn-sm btn-danger' onClick={onDelete(todo)}>Delete</button> */}
      {/* but above method print ondelte instead of clicking of delete for everyone */}
      {/* that is happening because here we are passingb= function during rendering */}
      {/* what we want to just give a function not call it so wee will make pass arrow function that will executed whenever someone call it */}
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}


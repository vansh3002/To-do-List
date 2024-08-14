import React from 'react'

export const Footer = () => {
  //adding style that we computed from inspect
  let footerstyle={
    position: "relative",
    top: "100vh",
    width: "100%",
  }
  return (
    <footer className="bg-dark text-light py=3" style={footerstyle}>
      <p className='text-center'>Copyright &copy;MyTodosList.com</p>
      
    </footer>
  )
}


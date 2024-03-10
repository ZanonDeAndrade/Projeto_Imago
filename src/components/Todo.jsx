import React from 'react'
import { CiEdit } from "react-icons/ci";


const todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
          <div className='content'>
            <p>
              {todo.text}
            </p>
            <p className='category'>({todo.category})</p>
          </div>
          <div>
            <button className='complete' onClick={()=> completeTodo(todo.id)}><b>Completar</b></button>
            <button className='edit' > <CiEdit/> <b>Editar</b> </button>
            <button className='remove' onClick={()=> removeTodo(todo.id)}><b>X</b></button> 
          </div>
    </div>
  )
}

export default todo
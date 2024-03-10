import React from 'react'
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

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
            <button className='complete' onClick={()=> completeTodo(todo.id)}><FaCheck/></button>
            <button className='edit' > <CiEdit/> </button>
            <button className='remove' onClick={()=> removeTodo(todo.id)}><FaTrashAlt/></button> 
          </div>
    </div>
  )
}

export default todo
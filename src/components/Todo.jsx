
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
            <button className='complete' onClick={()=> completeTodo(todo.id)}><FaCheck/> <b>Completar</b></button>
            <br></br>
            <button className='edit' ><CiEdit/> <b>Editar</b></button>
            <br></br>
            <button className='remove' onClick={()=> removeTodo(todo.id)}><FaTrashAlt/> <b>Excluir</b></button> 
          </div>
    </div>
  )
}

export default todo
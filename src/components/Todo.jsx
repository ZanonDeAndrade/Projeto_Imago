import React, { useState } from "react";
import { FaCheck, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newCategory, setNewCategory] = useState(todo.category);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (newText.trim() !== "" && newCategory.trim() !== "") {
      editTodo(todo.id, newText, newCategory);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewText(todo.text);
    setNewCategory(todo.category);
  };

  return (
    <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className='content'>
        {isEditing ? (
          <div className="new">
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            <button className='save' onClick={handleSaveEdit}>Salvar</button>
            <button className='cancel' onClick={handleCancelEdit}>Cancelar</button>
          </div>
        ) : (
          <div>
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
          </div>
        )}
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}><FaCheck /> <b>Completar</b></button>
        <button className='edit' onClick={handleEditClick}><MdEdit /> <b>Editar</b></button>
        <button className='remove' onClick={() => removeTodo(todo.id)}><FaTrashAlt /> <b>Excluir</b></button>
      </div>
    </div>
  );
};

export default Todo;
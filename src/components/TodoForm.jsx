import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addTodo(text, category);
            setText("");
            setCategory("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nova Tarefa" />
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Categoria" />
            <button type="submit">Adicionar</button>
        </form>
    );
};

export default TodoForm
import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = (text, category) => {
    const newTodo = {
      id: Math.floor(Math.random() * 20000),
      text,
      category,
      isCompleted: false,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);


  useEffect(() => {
    const storagedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storagedTodos)
    setIsLoaded (true);
  }, [])

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className='app'>
      <h1> Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <div className='todo-list'>
        {todos
          .filter(todo => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()))
          .map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
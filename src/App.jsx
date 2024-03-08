import { useState } from 'react';
import Todo from './components/Todo'; 
import TodoForm from './components/TodoForm';
import "./App.css";

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer relatório",
      category: "Trabalho",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isCompleted: false,
    },

    {
      id: 3,
      text: "Estudar para a prova",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: Math.floor (Math.random()*20000),
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodo)
};

const removeTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
  setTodos(filteredTodos);
};

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
  setTodos(newTodos);
};

  return <div className='app'>
    <h1> Lista de Tarefas</h1>
    <div className='todo-list'>
      {todos.map((todo)=>(
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>   
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>

}

export default App
import React from 'react';
import { useState } from 'react';
import AddTodoForm from './components/AddTodoForm'; // Import the AddTodoForm component
import TodoList from './components/TodoList'; // Import the TodoList component

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )) );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <h1>Welcome to Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoApp;
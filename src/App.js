import React from 'react';
import './App.css';
import TodoList from './ToDoList';
import Form from './Form';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TodoList />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    return sortAsc ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text);
  });

  return (
    <div className="todo-container">
      <h1 className="todo-title">React To-Do List</h1>
      <TaskInput addTask={addTask} />

      <div className="todo-controls">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="todo-filter"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <button
          className="todo-sort"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Sort {sortAsc ? '↓' : '↑'}
        </button>
      </div>

      <TaskList tasks={sortedTasks} removeTask={removeTask} toggleTask={toggleTask} />
    </div>
  );
};

export default TodoApp;
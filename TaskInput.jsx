import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return alert('Please enter a valid task');
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        className="task-input-field"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="task-input-button">
        Add
      </button>
    </form>
  );
};

export default TaskInput;
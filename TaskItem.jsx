import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import './TaskItem.css';

const TaskItem = ({ task, removeTask, toggleTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div
        className="task-item-content"
        onClick={() => toggleTask(task.id)}
      >
        {task.completed ? (
          <CheckCircle className="task-icon" />
        ) : (
          <Circle className="task-icon" />
        )}
        {task.text}
      </div>
      <Trash2
        onClick={() => removeTask(task.id)}
        className="task-delete"
      />
    </li>
  );
};

export default TaskItem;

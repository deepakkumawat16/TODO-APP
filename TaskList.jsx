import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, removeTask, toggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;

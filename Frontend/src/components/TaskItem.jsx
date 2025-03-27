import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={task.completed}
          onChange={() =>
            onUpdateTask(task._id, { ...task, completed: !task.completed })
          }
        />
        <span
          className={`task-text ${
            task.completed ? "text-decoration-line-through" : ""
          }`}
        >
          <strong>{task.title}</strong> - {task.description}
        </span>
      </div>
      <button
        className="btn btn-danger btn-sm mb-2"
        onClick={() => onDeleteTask(task._id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;

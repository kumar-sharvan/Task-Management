import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-2 w-100">
        <input
          type="checkbox"
          className="form-check-input ms-2"
          checked={task.completed}
          onChange={() =>
            onUpdateTask(task._id, { ...task, completed: !task.completed })
          }
        />
        <span
          className={`task-text text-start flex-grow-1 ms-2 ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          <strong>{task.title}</strong> - {task.description}
        </span>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDeleteTask(task._id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;

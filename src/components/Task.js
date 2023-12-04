import { useState } from "react";
import { FaTimes, FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import EditTask from "./EditTask";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  const [showEditTask, setShowEditTask] = useState(false);

  const toggleEdit = () => {
    setShowEditTask(!showEditTask);
  };

  return (
    <div>
      <div
        className={`task ${task.reminder ? "reminder" : ""}`}
        onDoubleClick={() => onToggle(task.id)}
      >
        <h3>
          {task.text}{" "}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </h3>
        <p>
          {task.day}
          <FaPenSquare
            style={{ color: "teal", cursor: "pointer" }}
            onClick={() => toggleEdit()}
          />
        </p>
        <p>
          <Link to={`/task/${task.id}`}>View Details</Link>
        </p>
      </div>
      {showEditTask && (
        <EditTask task={task} onEdit={onEdit} toggleEdit={toggleEdit} />
      )}
    </div>
  );
};

export default Task;

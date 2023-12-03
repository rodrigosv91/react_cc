import { FaTimes, FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
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
          onClick={() => onEdit(task)}
        />
      </p>
      <p>
        <Link to={`/task/${task.id}`}>View Details</Link>
      </p>
    </div>
  );
};

export default Task;

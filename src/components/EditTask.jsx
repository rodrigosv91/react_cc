import { useState } from "react";

const EditTask = ({ task, onEdit, toggleEdit }) => {
  const [day, setDay] = useState(task.day);

  const onSubmitFunction = (e) => {
    e.preventDefault();

    if (!day) {
      alert("Add a Day");
      return;
    }
    task.day = day;
    onEdit(task);
    toggleEdit();
  };

  return (
    <form className="add-form" onSubmit={onSubmitFunction}>
      <div className="form-control">
        <input
          defaultValue={task.day}
          onChange={(e) => setDay(e.target.value)}
        />
        <button className="btn btn-block">Save</button>
      </div>
    </form>
  );
};

export default EditTask;

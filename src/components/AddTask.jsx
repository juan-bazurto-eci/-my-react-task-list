import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ taskToDo, saveTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const handleNewTaskValue = (event) => {
    setNewTaskValue(event.target.value);
  };
  const handleAddNewTask = () => {
    saveTask([{ description: newTaskValue, state: false }, ...taskToDo]);
    setNewTaskValue("");
  };
  return (
    <>
      <input type="text" value={newTaskValue} onChange={handleNewTaskValue} />
      <button onClick={handleAddNewTask}>+</button>
    </>
  );
};

AddTask.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default AddTask;

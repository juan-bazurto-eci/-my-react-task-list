import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ todoItems, saveTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const handleNewTaskValue = (event) => {
    setNewTaskValue(event.target.value);
  };
  const handleAddNewTask = () => {
    saveTask([{ text: newTaskValue, state: false }, ...todoItems]);
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
  todoItems: PropTypes.array,
  saveTask: PropTypes.func,
};

export default AddTask;

import { useState } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";

const AddTask = ({ taskToDo, saveTask }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [formError, setFormError] = useState({ name: "", description: "" });
  const handleAddNewTask = (event) => {
    event.preventDefault();
    if (!formData.name) {
      setFormError({ ...formError, name: "name is required" });
    } else if (formData.name < 4) {
      setFormError({
        ...formError,
        name: "name must be have more than 3 characters",
      });
    } else {
      setFormError({ ...formError, name: "" });
      saveTask([
        {
          name: formData.name,
          description: formData.description,
          state: false,
        },
        ...taskToDo,
      ]);
      setFormData({ name: "", description: "" });
      setOpenModal(false);
    }
  };
  const handleSetNameTask = (event) => {
    if (!event.target.value) {
      setFormError({ ...formError, name: "name is required" });
    } else if (event.target.value.length < 4) {
      setFormError({
        ...formError,
        name: "name must be have more than 3 characters",
      });
    } else {
      setFormError({ ...formError, name: "" });
    }
    setFormData({ ...formData, name: event.target.value });
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        +
      </button>
      {openModal && (
        <form onSubmit={handleAddNewTask}>
          <div>
            <label>Name of Taks </label>
            <input onChange={handleSetNameTask} />
            {formError.name && (
              <span style={{ color: "red" }}>{formError.name}</span>
            )}
          </div>
          <div>
            <label>description </label>
            <input
              onChange={(event) =>
                setFormData({ ...formData, description: event.target.value })
              }
            />
          </div>
          <button>Send</button>
          <button onClick={() => setOpenModal(false)}>Close</button>
        </form>
      )}
    </div>
  );
};

AddTask.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default AddTask;

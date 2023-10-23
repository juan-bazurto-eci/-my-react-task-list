import PropTypes from "prop-types";
import "./Task.css";

const Task = ({ todo, deleteTasks, editTasks }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={todo.state}
        onChange={() => editTasks(todo, "Finalizada")}
      />
      <div>
        <h3>{todo.name}</h3>
        <p>{todo.description}</p>
      </div>
      <div>
        <button onClick={() => deleteTasks(todo)}>Borrar</button>
      </div>
    </div>
  );
};

Task.propTypes = {
  todo: PropTypes.object,
  deleteTasks: PropTypes.func,
  editTasks: PropTypes.func,
};

export default Task;

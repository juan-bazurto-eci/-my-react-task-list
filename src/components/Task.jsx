import PropTypes from "prop-types";

const Task = ({ todo, deleteTasks, editTasks }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.state}
        onChange={() => editTasks(todo, "Finalizada")}
      />
      {todo.description}
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

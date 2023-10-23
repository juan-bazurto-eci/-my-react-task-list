import PropTypes from "prop-types";
import "./Footer.css"; // Asegúrate de que la ruta sea correcta

const Footer = ({ taskToDo, saveTask }) => {
  let pendingTask = 0;

  taskToDo.forEach((objeto) => {
    if (objeto.state === false) {
      pendingTask++;
    }
  });

  return (
    <div className="footer">
      <span className="task-count">{`You have ${pendingTask} pending task`}</span>
      {taskToDo?.length > 0 ? (
        <button
          className="clear-button"
          onClick={() => {
            saveTask([]);
          }}
        >
          Clear All
        </button>
      ) : null}
    </div>
  );
};

Footer.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default Footer;

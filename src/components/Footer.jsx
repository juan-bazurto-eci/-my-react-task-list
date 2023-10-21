import PropTypes from "prop-types";

const Footer = ({ taskToDo, saveTask }) => {
  let pendingTask = 0;

  taskToDo.forEach((objeto) => {
    if (objeto.state === false) {
      pendingTask++;
    }
  });

  return (
    <>
      {`You have ${pendingTask} pending task`}{" "}
      <button
        onClick={() => {
          saveTask([]);
        }}
      >
        Clear All
      </button>
    </>
  );
};

Footer.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default Footer;

import PropTypes from "prop-types";

const Footer = ({ todoItems, saveTask }) => {
  let pendingTask = 0;

  todoItems.forEach((objeto) => {
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
  todoItems: PropTypes.array,
  saveTask: PropTypes.func,
};

export default Footer;

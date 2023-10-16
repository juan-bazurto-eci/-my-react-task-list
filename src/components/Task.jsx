import PropTypes from "prop-types";

const Task = ({ todo }) => {
  return (
    <>
      <input type="checkbox" />
      {todo.text}
    </>
  );
};

Task.propTypes = {
  todo: PropTypes.string,
};

export default Task;

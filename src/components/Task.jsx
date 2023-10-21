import PropTypes from "prop-types";

const Task = ({ todo }) => {
  const handleChangeState = () => {
    console.log("Task");
  };
  return (
    <>
      <input type="checkbox" onClick={handleChangeState} />
      {todo.text}
    </>
  );
};

Task.propTypes = {
  todo: PropTypes.object,
};

export default Task;

import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = ({ todoItems }) => {
  return (
    <ul>
      {todoItems.map((todo, idx) => (
        <div key={`${todo.text}-${idx}`}>
          <Task todo={todo} />
        </div>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  todoItems: PropTypes.array,
};

export default TaskList;

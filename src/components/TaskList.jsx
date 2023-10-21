import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = (props) => {
  return (
    <ul>
      {props.taskToDo.map((todo, idx) => (
        <div key={`${todo.description}-${idx}`}>
          <Task
            todo={todo}
            deleteTasks={props.deleteTasks}
            editTasks={props.editTasks}
          />
        </div>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  taskToDo: PropTypes.array,
  deleteTasks: PropTypes.func,
  editTasks: PropTypes.func,
};

export default TaskList;

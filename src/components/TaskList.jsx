import PropTypes from "prop-types";
import Task from "./Task";
import "./TaskList.css"; // Asegúrate de que la ruta sea correcta

const TaskList = (props) => {
  return (
    <ul className="task-list">
      {props.taskToDo.map((todo, idx) => (
        <div key={`${todo.description}-${idx}`} className="task-list-item">
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

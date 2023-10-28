import PropTypes from "prop-types";
import Task from "./Task";
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <Box p="4">
      <UnorderedList listStyleType="none" className="task-list">
        {props.taskToDo.map((todo, idx) => (
          <ListItem
            key={`${todo.description}-${idx}`}
            className="task-list-item"
          >
            <Task
              todo={todo}
              deleteTasks={props.deleteTasks}
              editTasks={props.editTasks}
            />
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

TaskList.propTypes = {
  taskToDo: PropTypes.array,
  deleteTasks: PropTypes.func,
  editTasks: PropTypes.func,
};

export default TaskList;

import PropTypes from "prop-types";
import { Box, Text, Button } from "@chakra-ui/react";
import "./Footer.css"; // Asegúrate de que la ruta sea correcta

const Footer = ({ taskToDo, saveTask }) => {
  let pendingTask = 0;

  taskToDo.forEach((objeto) => {
    if (objeto.state === false) {
      pendingTask++;
    }
  });

  return (
    <Box as="div" className="footer" p="4">
      <Text className="task-count">{`You have ${pendingTask} pending task${
        pendingTask === 1 ? "" : "s"
      }`}</Text>
      {taskToDo?.length > 0 ? (
        <Button colorScheme="red" onClick={() => saveTask([])}>
          Clear All
        </Button>
      ) : null}
    </Box>
  );
};

Footer.propTypes = {
  taskToDo: PropTypes.array,
  saveTask: PropTypes.func,
};

export default Footer;

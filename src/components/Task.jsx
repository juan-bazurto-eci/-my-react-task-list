import PropTypes from "prop-types";
import { Box, Checkbox, Text, Button, Flex } from "@chakra-ui/react";
import "./Task.css";

const Task = ({ todo, deleteTasks, editTasks }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="4"
      my="3"
      display="flex"
      alignItems="center"
    >
      <Checkbox
        isChecked={todo.state}
        onChange={() => editTasks(todo, "Finalizada")}
        size="lg"
        mr="3"
      />
      <Flex flex="1" flexDirection="column">
        <Text fontSize="lg" fontWeight="bold">
          {todo.name}
        </Text>
        <Text>{todo.description}</Text>
      </Flex>
      <Button colorScheme="red" onClick={() => deleteTasks(todo)} ml="3">
        Borrar
      </Button>
    </Box>
  );
};

Task.propTypes = {
  todo: PropTypes.object,
  deleteTasks: PropTypes.func,
  editTasks: PropTypes.func,
};

export default Task;

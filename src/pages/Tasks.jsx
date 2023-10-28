import { Container } from "@chakra-ui/react";
import { useTasks } from "../hooks/useTasks";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import AddTask from "../components/AddTask";
import Footer from "../components/Footer";
import "./Tasks.css";

function Tasks() {
  const { taskToDo, saveTask, deleteTasks, editTasks } = useTasks();

  return (
    <Container maxW="xl" p="4">
      <Header />
      <AddTask taskToDo={taskToDo} saveTask={saveTask} />
      <TaskList
        taskToDo={taskToDo}
        deleteTasks={deleteTasks}
        editTasks={editTasks}
      />
      <Footer taskToDo={taskToDo} saveTask={saveTask} />
    </Container>
  );
}

export default Tasks;

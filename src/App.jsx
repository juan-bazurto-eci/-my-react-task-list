import { useTasks } from "./hooks/useTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

function App() {
  const { taskToDo, saveTask, deleteTasks, editTasks } = useTasks();

  return (
    <>
      <Header />
      <AddTask taskToDo={taskToDo} saveTask={saveTask} />
      <TaskList
        taskToDo={taskToDo}
        deleteTasks={deleteTasks}
        editTasks={editTasks}
      />
      <Footer taskToDo={taskToDo} saveTask={saveTask} />
    </>
  );
}

export default App;

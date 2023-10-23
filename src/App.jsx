import { useTasks } from "./hooks/useTasks";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { taskToDo, saveTask, deleteTasks, editTasks } = useTasks();

  return (
    <div className="app-container">
      <Header />
      <AddTask taskToDo={taskToDo} saveTask={saveTask} />
      <TaskList
        taskToDo={taskToDo}
        deleteTasks={deleteTasks}
        editTasks={editTasks}
      />
      <Footer taskToDo={taskToDo} saveTask={saveTask} />
    </div>
  );
}

export default App;

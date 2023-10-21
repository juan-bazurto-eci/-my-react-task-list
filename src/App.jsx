import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

function App() {
  const [taskToDo, setTaskToDo] = useState([]);

  const saveTask = (newTasks) => {
    localStorage.setItem("TaskToDo", JSON.stringify(newTasks));
    setTaskToDo(newTasks);
  };

  //Simulating a api function
  useEffect(() => {
    setTimeout(() => {
      let Tasks = JSON.parse(localStorage.getItem("TaskToDo"));
      if (Tasks) {
        saveTask(Tasks);
      } else {
        saveTask([]);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "TaskToDo") {
        setTaskToDo(JSON.parse(event.newValue));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <Header />
      <AddTask todoItems={taskToDo} saveTask={saveTask} />
      <TaskList todoItems={taskToDo} />
      <Footer todoItems={taskToDo} saveTask={saveTask} />
    </>
  );
}

export default App;

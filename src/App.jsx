import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className="card-cont">
        {tasks.map((task) => (
          <Card
            title={task.title}
            description={task.description}
            dueDate={task.due_date}
            id={task._id}
          />
        ))}

        <a className="task-card" href="/tasks/new">
          <h1 className="task-title hover-op">Add new task +</h1>
          <p className="task-description"></p>
          <p className="task-due-date"></p>
        </a>
      </div>
    </>
  );
}

export default App;

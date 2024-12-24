import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Card from "../components/Card";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {tasks.map((task) => (
        <Card
          title={task.title}
          description={task.description}
          dueDate={task.due_date}
        />
      ))}
    </>
  );
}

export default App;

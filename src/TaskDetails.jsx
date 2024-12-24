import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TaskDetails.css";
const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((res) => {
      setTask(res.data);
    });
  }, [id]);
  const complete = () => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then((res) => {
        window.location = "/tasks";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <div className="task-info">
        <p>{task.description}</p>
        <div>
          <label>Due Date</label>
          <span>{task.due_date}</span>
        </div>
      </div>
      <button onClick={complete}>Mark as Complete</button>
    </div>
  );
};

export default TaskDetails;

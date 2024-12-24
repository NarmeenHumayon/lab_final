import React, { useEffect, useState } from "react";
import "./NewTask.css";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((res) => {
      // Assuming the response contains due_date in a valid date format, if not, convert it.
      const fetchedTask = res.data;

      // Check if the date is in a valid format, and convert it to YYYY-MM-DD if needed.
      const formattedDueDate = new Date(fetchedTask.due_date)
        .toISOString()
        .split("T")[0];

      setTask({
        title: fetchedTask.title,
        description: fetchedTask.description,
        due_date: formattedDueDate, // Ensure it's in YYYY-MM-DD format
      });
    });
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/tasks/${id}`, task)
      .then((res) => {
        window.location = "/tasks";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      <div className="new-task-form">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={task.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="due_date">Due Date</label>
            <input
              type="date"
              id="due_date"
              name="due_date"
              value={task.due_date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Edit Task</button>
        </form>
      </div>
    </>
  );
};

export default EditTask;

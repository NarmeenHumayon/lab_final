import React, { useState } from "react";
import "./NewTask.css";
import NavBar from "../components/NavBar";
const NewTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
  });

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
    // You can add the task creation logic here (e.g., send data to backend)
    console.log("New Task Created:", task);
    // Reset the form
    setTask({ title: "", description: "", due_date: "" });
  };

  return (
    <>
      <NavBar />
      <div className="new-task-form">
        <h2>Create New Task</h2>
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

          <button type="submit">Create Task</button>
        </form>
      </div>
    </>
  );
};

export default NewTask;

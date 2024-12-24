import React from "react";
import "./Card.css";

const Card = ({ title, description, dueDate }) => {
  return (
    <div className="task-card">
      <h2 className="task-title">{title}</h2>
      <p className="task-description">{description}</p>
      <p className="task-due-date">
        <strong>Due Date:</strong> {new Date(dueDate).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Card;

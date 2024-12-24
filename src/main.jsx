import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import NewTask from "./NewTask.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
      <Route path="/tasks" Component={App} />
      <Route path="/login" Component={Login} />
      <Route path="/tasks/new" Component={NewTask} />
    </Routes>
  </BrowserRouter>
);

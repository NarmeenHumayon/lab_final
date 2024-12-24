import { useState } from "react";
import "./Login.css";
import { useLocalStorage } from "@uidotdev/usehooks";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [auth, setAuth] = useLocalStorage("auth", false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username == "admin" && formData.password == "admin123") {
      setAuth(true);
      window.location = "/tasks";
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="username"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error != "" && <div className="error">{error}</div>}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;

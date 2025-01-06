import { useState } from "react";
import "./login.css";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="login-container">
        <div>
          <div className="login-container-title">
            <h1>Giriş Yap</h1>
          </div>
          <div className="login-input-container">
            <input
              onChange={(e) => setMail(e.target.value)}
              className="login-input-field"
              value={mail}
              placeholder="enter mail"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="login-input-field"
              value={password}
              placeholder="enter password"
            />
            <button className="login-btn">Giriş</button>
            <h2>{password}</h2>
            <h2>{mail}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

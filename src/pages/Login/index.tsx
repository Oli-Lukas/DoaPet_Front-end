import { useState, useEffect, useCallback, FormEvent, } from "react";
import { useNavigate, } from "react-router-dom";
import { api, } from "../../lib/axios";
import LoginIcon from "../../assets/images/login-page/login-icon.png";

import "./style.scss";

function Login()
{
  const [login, setLogin,] = useState<string>("",);
  const [password, setPassword,] = useState<string>("",);

  async function makeLogin(event: FormEvent<HTMLFormElement | EventTarget>,)
  {
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <img className="ufpe-logo" src={LoginIcon} />

        <h2 className="login-title">DoaPet</h2>

        <form>
          <input
            className="login"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e,) => setLogin(e.target.value,)}
          />
          <input
            className="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e,) => setPassword(e.target.value,)}
          />

          <button className="login-button" type="submit" onClick={makeLogin}>Efetuar Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
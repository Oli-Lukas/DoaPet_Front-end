import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginIcon from "../../assets/images/login-page/login-icon.png";
import "./style.scss";
import { api } from "../../lib/axios";

function Login()
{
  const navigator = useNavigate();

  const [login, setLogin]       = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function makeLogin(event: FormEvent<HTMLFormElement | EventTarget>)
  {
    event.preventDefault();

    const response = await api.post("auth/login", { email: login, senha: password });

    if (response.status === 200)
    {
      localStorage.setItem("doapet-user-token", response.data.token);
      navigator("/home");
    }
    else
    {
      console.log("Erro ao efetuar autenticação!"); 
    }
  }

  function checkToken()
  {
    const token = localStorage.getItem("doapet-user-token");
    if (token)
      navigator("/home");
  }

  useEffect(checkToken, [navigator]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="brand-title">DoaPet</h2>
        <img className="login-icon" src={LoginIcon} title="" />

        <form onSubmit={makeLogin}>
          <input
            className="login"
            type="text"
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          />
          <input
            className="password"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <input type="submit" value="Entrar"/>
        </form>

        <p className="text first">
          Não possui uma conta? <Link to="/user-signup">Clique aqui</Link> para
          se juntar conosco.
        </p>
        <p className="text">
          Caso queira cadastrar sua ONG <Link to="/ong-signup">clique aqui</Link>.
        </p>

      </div>
    </div>
  );
}

export default Login;
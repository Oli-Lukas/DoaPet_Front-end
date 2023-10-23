import LoginIcon from "../../assets/images/login-page/login-icon.png";
import "./style.scss";

function Login()
{
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="brand-title">DoaPet</h2>
        <img className="login-icon" src={LoginIcon} title="" />

        <form>
          <input className="login" type="text" placeholder="Login"/>
          <input className="password" type="password" placeholder="Senha"/>

          <input type="submit" value="Entrar" />
        </form>

        <p className="text first">
          Não possui uma conta? <a>Clique aqui</a> para se
          juntar conosco.
        </p>
        <p className="text">
          Caso queira cadastrar sua ONG <a>clique aqui</a>.
        </p>

      </div>
    </div>
  );
}

export default Login;
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/home-page/icon.png";

import "./style.scss";
import { useEffect } from "react";

function HomePage()
{
  const navigator = useNavigate();

  function checkToken()
  {
    const token = localStorage.getItem("doapet-user-token");
    if (!token)
      navigator("/login");
  }

  function userLogout()
  {
    localStorage.removeItem("doapet-user-token");
    navigator("/login");
  }

  useEffect(checkToken, [navigator]);

  return (
    <div className="home-page">
      <nav>
        <a className="home-link" href="#" >
          <img className="icon" src={icon}/>
        </a>

        <ul className="menu-list">
          <li><button className="" type="button">Solicitações de Adoção</button></li>
          <li><button className="" type="button">ONGs</button></li>
          <li><button className="active" type="button">Banco de Adoção</button></li>
          <li><button className="" type="button">Minha Conta</button></li>
          <li><button className="" type="button" onClick={userLogout}>Sair</button></li>
        </ul>
      </nav>

      <div className="adoption-offers-section">
        <h2 className="title">Banco de Adoção</h2>
      </div>
    </div>
  );
}

export default HomePage;
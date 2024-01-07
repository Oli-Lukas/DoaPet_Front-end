import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import icon from "../../assets/images/home-page/icon.png";
import "./style.scss";

function Menu()
{
  const navigator = useNavigate();
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  function userLogout()
  {
    localStorage.removeItem(localStorageTokenId);
    navigator("/login");
  }

  function checkToken()
  {
    const token = localStorage.getItem(localStorageTokenId);
    if (!token)
      navigator("/login");
  }

  useEffect(checkToken, [navigator, localStorageTokenId]);

  return (
    <nav className="menu" >
      <a className="home-link" href="#" >
        <img className="icon" src={icon}/>
      </a>

      <ul className="menu-list">
        <li><button className="" type="button">Solicitações de Adoção</button></li>
        <li><button className="" type="button">Eventos</button></li>
        <li><button className="" type="button">ONGs</button></li>
        <li><button className="active" type="button">Banco de Adoção</button></li>
        <li><button className="" type="button">Minha Conta</button></li>
        <li><button className="" type="button" onClick={userLogout}>Sair</button></li>
      </ul>
    </nav>
  );
}

export default Menu;
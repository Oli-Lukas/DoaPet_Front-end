import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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
        <li><Link to="/events" className="" type="button">Eventos</Link></li>
        <li><Link to="/ongs" className="" type="button">ONGs</Link></li>
        <li><Link to="/home" className="active" type="button">Banco de Adoção</Link></li>
        <li><Link to="/user-account" className="" type="button">Minha Conta</Link></li>
        <li><button type="button" onClick={userLogout}>Sair</button></li>
      </ul>
    </nav>
  );
}

export default Menu;
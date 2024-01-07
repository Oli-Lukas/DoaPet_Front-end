import { useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

import icon from "../../assets/images/home-page/icon.png";
import "./style.scss";

function Menu()
{
  const navigator = useNavigate();
  const location = useLocation();
  const localStorageTokenId = import.meta.env.VITE_LOCALSTORAGE_TOKEN_ID as string;

  const links = [
    <Link to="/events" className="menu-item-link" type="button">Eventos</Link>,
    <Link to="/ongs" className="menu-item-link" type="button">ONGs</Link>,
    <Link to="/home" className="menu-item-link active" type="button">Banco de Adoção</Link>,
    <Link to="/user-account" className="menu-item-link" type="button">Minha Conta</Link>
  ];

  function updateLinks()
  {
    function deactiveAllLinks(links: NodeListOf<Element>): void
    {
      links.forEach(link => link.classList.remove("active"));
    }

    function activeCurrentLink(links: NodeListOf<Element>): void
    {
      links.forEach(link => {
        if (link.getAttribute("href") === location.pathname)
          link.classList.add("active");
      });
    }

    const menuLinks = document.querySelectorAll("a.menu-item-link");
    deactiveAllLinks(menuLinks);
    activeCurrentLink(menuLinks);
  }

  useEffect(updateLinks, [location]);

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
        {links.map(link => <li>{link}</li>)}
        <li><button type="button" onClick={userLogout}>Sair</button></li>
      </ul>
    </nav>
  );
}

export default Menu;
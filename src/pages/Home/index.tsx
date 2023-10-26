import icon from "../../assets/images/home-page/icon.png";

import "./style.scss";

function HomePage()
{
  return (
    <div className="home-page">
      <nav>
        <a className="home-link" href="#" >
          <img className="icon" src={icon}/>
        </a>

        <ul className="menu-list">
          <li><a className="" href="#">Solicitações de Adoção</a></li>
          <li><a className="" href="#">ONGs</a></li>
          <li><a className="active" href="#">Banco de Adoção</a></li>
          <li><a className="" href="#">Minha Conta</a></li>
          <li><a className="" href="#">Sair</a></li>
        </ul>
      </nav>

      <div className="adoption-offers-section">
        <h2 className="title">Banco de Adoção</h2>
      </div>
    </div>
  );
}

export default HomePage;
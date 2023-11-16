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
          <li><button className="" type="button">Solicitações de Adoção</button></li>
          <li><button className="" type="button">ONGs</button></li>
          <li><button className="active" type="button">Banco de Adoção</button></li>
          <li><button className="" type="button">Minha Conta</button></li>
          <li><button className="" type="button">Sair</button></li>
        </ul>
      </nav>

      <div className="adoption-offers-section">
        <h2 className="title">Banco de Adoção</h2>
      </div>
    </div>
  );
}

export default HomePage;
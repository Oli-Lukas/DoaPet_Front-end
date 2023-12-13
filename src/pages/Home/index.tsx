import { Link } from "react-router-dom";

import Menu from "../../components/Menu";
import plusSign from "../../assets/images/home-page/plus-sign.png";
import "./style.scss";

function HomePage()
{
  return (
    <div className="home-page">
      <Menu />

      <div className="adoption-offers-section">
        <h2 className="title">Banco de Adoção</h2>
      </div>

      <div className="adoptions-body">
        <div className="adoptions-container">

          <Link to="" className="create-adoption-offer">
            <img className="plus-sign" src={plusSign} />
          </Link>

          <div className="adoption-offer-card"></div>
          <div className="adoption-offer-card"></div>
          <div className="adoption-offer-card"></div>
          <div className="adoption-offer-card"></div>
          <div className="adoption-offer-card"></div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
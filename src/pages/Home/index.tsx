import Menu from "../../components/Menu";
import plusSign from "../../assets/images/home-page/plus-sign.png";
import "./style.scss";

function HomePage()
{
  return (
    <div className="home-page">
      <Menu />

      <div className="adoption-offer-section">
        <h2 className="title">Banco de Adoção</h2>

        <div className="adoption-offer-container">

          <button type="button" className="create-adoption-offer">
            <img className="plus-sign" src={plusSign} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
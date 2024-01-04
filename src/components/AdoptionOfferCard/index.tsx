import cardImage from "../../assets/images/home-page/cao-labrador.png";

import "./style.scss";

function AdoptionOfferCard()
{
  return (
    <div className="adoption-offer-card">
      <img className="card-image" src={cardImage} />
      <h3 className="card-title" >Titulo</h3>
      <p className="card-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla lacinia quam nec lobortis.
      </p>
      <button className="card-button" >Ver</button>
    </div>
  );
}

export default AdoptionOfferCard;
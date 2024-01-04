// import cardImage from "../../assets/images/home-page/cao-labrador.png";

import "./style.scss";

interface AdoptionOfferCardProps
{
  cardImage: string;
  title: string;
  description: string;
}

function AdoptionOfferCard(props: AdoptionOfferCardProps)
{
  function makeShortDescription(description: string) {
    const charactersLimit = 150;
    return description.slice(0, charactersLimit) + "...";
  }

  const { cardImage, title, description } = props;
  const shortDescription = makeShortDescription(description);

  return (
    <div className="adoption-offer-card">
      <img className="card-image" src={cardImage} />
      <h3 className="card-title" >{title}</h3>
      <p className="card-description">{shortDescription}</p>
      <button className="card-button" >Ver</button>
    </div>
  );
}

export default AdoptionOfferCard;
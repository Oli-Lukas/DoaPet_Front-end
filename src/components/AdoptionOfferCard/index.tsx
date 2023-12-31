import React from 'react';
import "./style.scss";

interface AdoptionOfferCardProps {
  cardImage: string;
  title: string;
  description: string;
}

function AdoptionOfferCard(props: AdoptionOfferCardProps) {
  const { cardImage, title, description } = props;

  const shortDescription = makeShortDescription(description);

  function makeShortDescription(description: string) {
    const charactersLimit = 150;

    if (description.length > charactersLimit)
      return description.slice(0, charactersLimit) + "...";
    else
      return description;
  }

  return (
    <div className="adoption-offer-card">
      <img className="card-image" src={`data:image/png;base64,${cardImage}`} alt="Imagem" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{shortDescription}</p>
      <button className="card-button">Ver</button>
    </div>
  );
}

export default AdoptionOfferCard;

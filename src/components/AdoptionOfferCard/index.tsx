import { CSSProperties, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { generateRandomStyle, randomCardStyleType } from "./util";
import "./style.scss";

interface AdoptionOfferCardProps
{
  id: number;
  cardImage: string;
  title: string;
  description: string;
}

function AdoptionOfferCard(props: AdoptionOfferCardProps)
{
  function makeShortDescription(description: string) {
    const charactersLimit = 150;

    if (description.length > charactersLimit)
      return description.slice(0, charactersLimit) + "...";
    else
      return description;
  }

  const { id, cardImage, title, description } = props;
  const shortDescription = makeShortDescription(description);
  const styleRef = useRef<CSSProperties[]>(generateRandomStyle(randomCardStyleType()));
  const [buttonHovered, setButtonHovered] = useState<boolean>(false);

  return (
    <div
      className="adoption-offer-card"
      style={styleRef.current[0]}
    >
      <img className="card-image" src={cardImage} />
      <h3 className="card-title" >{title}</h3>
      <p className="card-description">{shortDescription}</p>
      <Link
        className="card-button"
        style={(buttonHovered) ? styleRef.current[2] : styleRef.current[1]}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
        to={`/adoption-offer/${id}`}
      >
        Ver
      </Link>
    </div>
  );
}

export default AdoptionOfferCard;
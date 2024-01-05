import { CSSProperties, useRef, useState } from "react";
import "./style.scss";
import { generateRandomStyle, randomCardStyleType } from "./util";

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

    if (description.length > charactersLimit)
      return description.slice(0, charactersLimit) + "...";
    else
      return description;
  }

  const { cardImage, title, description } = props;
  const shortDescription = makeShortDescription(description);
  // const [cardStyle, buttonStyle, buttonStyleHovered] = generateRandomStyle();
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
      <button
        className="card-button"
        style={(buttonHovered) ? styleRef.current[2] : styleRef.current[1]}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        Ver
      </button>
    </div>
  );
}

export default AdoptionOfferCard;
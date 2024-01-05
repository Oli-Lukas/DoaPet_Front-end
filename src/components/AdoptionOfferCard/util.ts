import { CSSProperties } from "react";
import { CardStyleType } from "./types";

export function randomCardStyleType(): CardStyleType
{
  const minimum: number = 1;
  const maximum: number = 3;

  const randomNumber  = Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
  const cardStyleType = randomNumber;

  return cardStyleType;
}

export function generateRandomStyle(cardStyleType: CardStyleType): CSSProperties[]
{
  function generateCardStyle(cardStyleType: CardStyleType): CSSProperties
  {
    const style: CSSProperties = {};

    switch(cardStyleType)
    {
      case CardStyleType.Yellow:
        style.backgroundColor = "rgba(255, 177, 66, .55)";
        break;
      case CardStyleType.Blue:
        style.backgroundColor = "rgba(87, 95, 207, .55)";
        break;
      case CardStyleType.Red:
        style.backgroundColor = "rgba(234, 32, 39, .55)";
        break;
    }

    return style;
  }

  function generateButtonStyle(cardStyleType: CardStyleType): CSSProperties
  {
    const buttonStyle: CSSProperties = {};

    switch(cardStyleType)
    {
      case CardStyleType.Yellow:
        buttonStyle.backgroundColor = "rgba(5, 196, 107, .9)";
        break;
      case CardStyleType.Blue:
        buttonStyle.backgroundColor = "rgba(190, 46, 221, .9)";
        break;
      case CardStyleType.Red:
        buttonStyle.backgroundColor = "rgba(27, 20, 100, .9)";
        break;
    }

    return buttonStyle;
  }

  function generateButtonHoveredStyle(cardStyleType: CardStyleType): CSSProperties
  {
    const buttonStyle: CSSProperties = {};

    switch(cardStyleType)
    {
      case CardStyleType.Yellow:
        buttonStyle.backgroundColor = "rgb(5, 196, 107)";
        break;
      case CardStyleType.Blue:
        buttonStyle.backgroundColor = "rgb(190, 46, 221)";
        break;
      case CardStyleType.Red:
        buttonStyle.backgroundColor = "rgb(27, 20, 100)";
        break;
    }

    return buttonStyle;
  }

  const cardStyle         : CSSProperties = generateCardStyle(cardStyleType);
  const buttonStyle       : CSSProperties = generateButtonStyle(cardStyleType);
  const buttonHoveredStyle: CSSProperties = generateButtonHoveredStyle(cardStyleType);

  return [cardStyle, buttonStyle, buttonHoveredStyle];
}

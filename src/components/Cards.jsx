import { useEffect, useState } from "react";
import "./Cards.css";
import initialCards from "./initialCards.json";
import winningParticleConfig from "./winningParticleConfig.json";
import standardParticleConfig from "./standardParticleConfig.json";
import ParticlesBackground from "./ParticlesBackground";

const Cards = () => {
  const [youWin, setYouWin] = useState(false);
  const [cards, setCards] = useState(initialCards.sort((a, b) => 0.5 - Math.random()));

  function handleFlippedCard(index) {
    if (
      cards.filter(function (card) {
        return card.comparing;
      }).length > 1
    ) {
      return;
    }
    if (!cards[index].comparing && !cards[index].matched) {
      const cardsCopy = [...cards];
      cardsCopy[index].comparing = true;
      setCards(cardsCopy);
    }
  }

  useEffect(() => {
    const cardsToCompare = cards.filter((card) => card.comparing);
    //  the cards are not flipping back
    if (cardsToCompare.length === 2) {
      if (cardsToCompare[0].emoji === cardsToCompare[1].emoji) {
        const cardsCopy = [...cards];

        for (let i = 0; i < cardsCopy.length; i++) {
          if (cardsCopy[i].emoji === cardsToCompare[0].emoji) {
            cardsCopy[i].matched = true;
            cardsCopy[i].comparing = false;
          }
        }

        setCards(cardsCopy);
        // this is the code that runs when the game is finished to reset the game
        if (cardsCopy.filter((card) => card.matched === true).length === cardsCopy.length) {
          setYouWin(true);
          setTimeout(function () {
            let cardsCopy2 = [...cards];
            cardsCopy2 = cardsCopy2
              .map((card) => ({
                ...card,
                matched: false,
                comparing: false,
              }))
              .sort((a, b) => 0.5 - Math.random());

            setCards(cardsCopy2);

            console.log("GAME FINISHED", cardsCopy2);
            setYouWin(false);
          }, 4000);
        }
        // end of the code
      }
      // if not all the cards are the same match we have not won the game
      if (cards.filter((card) => card.matched).length !== cards.length) {
        setTimeout(function () {
          setCards(cards.map((card) => ({ ...card, comparing: false })));
        }, 1000);
      }
    }
  }, [cards]);

  return (
    <div className="h-screen flex justify-center">
      {youWin ? (
        <div className="absolute bg-white text-xl p-10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1>You Win!</h1>
        </div>
      ) : (
        ""
      )}
      <ParticlesBackground particleSettings={youWin ? winningParticleConfig : standardParticleConfig} />
      <div className=" grid grid-cols-4 h-full gap-10 p-10 w-1/2  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` card-container   ${card.comparing || card.matched ? "flipped" : "false"}  
            transition duration-1000 ease-in-out
            ${card.matched ? "opacity-0" : ""}
            `}
            onClick={() => handleFlippedCard(index, card)}
          >
            <div className="">
              <div className="">
                <img className="back-side card-side" src={card.img} />
                <img
                  className="front-side card-side"
                  src="https://media.istockphoto.com/id/1185243165/vector/cute-princess-castle-isolated-on-white-background-flat-style-vector-illustration.jpg?s=612x612&w=0&k=20&c=a3uNr7EeDsCUuygKxn0-APBZhyWOY9lukyTuS9lMik0="
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

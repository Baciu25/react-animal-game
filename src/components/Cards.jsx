import { useEffect, useState } from "react";
import "./Cards.css";
import Winparticle from "./Winparticle";
import BackroundParticles from "./BackroundParticles";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      img: "https://media.istockphoto.com/id/913059310/de/vektor/lion-head.jpg?s=170667a&w=is&k=20&c=dzbboRr-LJK60cXmf47lL-BYR9qtxmUKqWPt6fztsBM=",
      name: "lion ",
      emoji: "🍎",
      comparing: false,
      matched: true,
    },
    {
      img: "https://img.pixers.pics/pho(s3:700/PI/23/27/700_PI2327_65c65c262917a837fe5b7240420e1ab4_5b7ab916358ae_.,700,700,jpg)/poster-hello-kitty.jpg.jpg",
      name: "banana",
      emoji: "🍌",
      comparing: false,
      matched: true,
    },
    {
      img: "https://www.chepstowgardencentre.co.uk/wp-content/uploads/2021/03/46488.png",
      name: "cherry",
      emoji: "🍒",
      comparing: false,
      matched: true,
    },
    {
      img: "https://www.zodiacsign.com/images/capricorn.jpg",
      name: "taco",
      emoji: "🌮",
      comparing: false,
      matched: true,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0066/2215/0744/products/penguin-wobble-soft-mint-jellystone-designs-png_2000x.png?v=1664189775",
      name: "penguin",
      emoji: "🐧",
      comparing: false,
      matched: true,
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/28/12/39/360_F_428123972_fCG5TfPCB0CA32s029w6SyUSzwvu3ZXZ.jpg",
      name: "rocket",
      emoji: "🚀",
      comparing: false,
      matched: true,
    },
    {
      img: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/screen-shot-2020-11-20-at-08.21.52_ver_1.png",
      name: "rainbow",
      emoji: "🌈",
      comparing: false,
      matched: true,
    },
    {
      img: "https://media.istockphoto.com/id/1364557568/vector/cartoon-beautiful-unicorn-head-is-on-the-cloud-with-beautiful-flowers.jpg?s=612x612&w=0&k=20&c=SbeqG1k6Y1swx_GAmKYbz7mx9DnBJYH1eNDLi4ZCN0Y=",
      name: "unicorn",
      emoji: "🦄",
      comparing: false,
      matched: false,
    },
    {
      img: "https://media.istockphoto.com/id/913059310/de/vektor/lion-head.jpg?s=170667a&w=is&k=20&c=dzbboRr-LJK60cXmf47lL-BYR9qtxmUKqWPt6fztsBM=",
      name: "lion",
      emoji: "🍎",
      comparing: false,
      matched: true,
    },
    {
      img: "https://img.pixers.pics/pho(s3:700/PI/23/27/700_PI2327_65c65c262917a837fe5b7240420e1ab4_5b7ab916358ae_.,700,700,jpg)/poster-hello-kitty.jpg.jpg",
      name: "banana",
      emoji: "🍌",
      comparing: false,
      matched: true,
    },
    {
      img: "https://www.chepstowgardencentre.co.uk/wp-content/uploads/2021/03/46488.png",
      name: "cherry",
      emoji: "🍒",
      comparing: false,
      matched: true,
    },
    {
      img: "https://www.zodiacsign.com/images/capricorn.jpg",
      name: "taco",
      emoji: "🌮",
      comparing: false,
      matched: true,
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0066/2215/0744/products/penguin-wobble-soft-mint-jellystone-designs-png_2000x.png?v=1664189775",
      name: "penguin",
      emoji: "🐧",
      comparing: false,
      matched: true,
    },
    {
      img: "https://t4.ftcdn.net/jpg/04/28/12/39/360_F_428123972_fCG5TfPCB0CA32s029w6SyUSzwvu3ZXZ.jpg",
      name: "rocket",
      emoji: "🚀",
      comparing: false,
      matched: true,
    },
    {
      img: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/screen-shot-2020-11-20-at-08.21.52_ver_1.png",
      name: "rainbow",
      emoji: "🌈",
      comparing: false,
      matched: true,
    },
    {
      img: "https://media.istockphoto.com/id/1364557568/vector/cartoon-beautiful-unicorn-head-is-on-the-cloud-with-beautiful-flowers.jpg?s=612x612&w=0&k=20&c=SbeqG1k6Y1swx_GAmKYbz7mx9DnBJYH1eNDLi4ZCN0Y=",
      name: "unicorn",
      emoji: "🦄",
      comparing: false,
      matched: false,
    },
  ]);

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
        if (
          cardsCopy.filter((card) => card.matched === true).length ===
          cardsCopy.length
        ) {
          const cardsCopy2 = [...cards];
          cardsCopy2.sort((a, b) => 0.5 - Math.random());
          setCards(
            cardsCopy2.map((card) => ({
              ...card,
              matched: false,
              comparing: false,
            }))
          );
        }
        // end of the code
      }
      // if not all the cards are the same match we have not won the game
      if (cards.filter((card) => card.matched).length !== cards.length) {
        alert("You won");
        setTimeout(function () {
          setCards(cards.map((card) => ({ ...card, comparing: false })));
        }, 1000);
      }
    }
  }, [cards]);

  return (
    <div>
      {cards.filter((card) => card.matched).length == cards.length ? (
        <BackroundParticles />
      ) : (
        <Winparticle />
      )}

      <div className=" grid grid-cols-4 h-full gap-10 p-10 w-1/2  ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={` card-container   ${
              card.comparing || card.matched ? "flipped" : "false"
            }  
            `}
            onClick={() => handleFlippedCard(index, card)}
          >
            <div className="">
              <div className="">
                <img className="back-side card-side" src={card.img} />
                <img
                  className="front-side card-side "
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

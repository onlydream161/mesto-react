import React from "react";
function Card( {card,onCardClick} ) {
 function handleCardClick(){
   onCardClick(card)
 }
  return (
    <>
      <li className="places__card">
        <button
          className="places__image-button"
          type="button"
          aria-label="открыть фото"
          onClick={handleCardClick}
        >
          <img className="places__image" src={card.link} alt={card.name} />
        </button>
        <div className="places__caption">
          <h2 className="places__name">{card.name}</h2>
          <div className="places__like">
            <button className="places__like-button " type="button"></button>
            <p className="places__like-sum">{card.likes.length}</p>
          </div>
        </div>
        <button
          className="places__trash places__trash_hidden"
          type="button"
        ></button>
      </li>
      </>
  );
}
export default Card
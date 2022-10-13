import React, { useEffect } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, handleCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCard()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="page__image-container" onClick={onEditAvatar}>
          <img className="profile__image" src={userAvatar} alt="фото профиля" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            className="profile__editor"
            type="button"
            onClick={onEditProfile}
          ></button>
          <p className="profile__caption">{userDescription}</p>
        </div>

        <button
          className="profile__card-button"
          aria-label="Добавить карточку"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements page__elements">
        <ul className="places">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={handleCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Main;

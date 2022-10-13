import PopupWithForm from "./PopupWithForm";
import React from "react";
function PopupAddCard({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup-cards"
      title="Новое Место"
      buttonText="Сохранить"
      children={
        <>
          <input
            className="popup__input  popup__input_valve_place"
            placeholder="Название"
            required
            type="text"
          />
          <span className="popup__error" id="nameplace-error"></span>
          <input
            className="popup__input  popup__input_valve_link"
            placeholder="Ссылка на картинку"
            required
            type="url"
          />
          <span className="popup__error" id="placelink-error"></span>
        </>
      }
    />
  );
}

export default PopupAddCard;

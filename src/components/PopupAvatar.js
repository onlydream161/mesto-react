import PopupWithForm from "./PopupWithForm";
import React from "react";
function PopupAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
    >
      <input
        className="popup__input   popup__input_valve_link"
        required
        placeholder="Ссылка на аватар"
        type="url"
        name="avatarlink"
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error" id="avatarlink-error"></span>
    </PopupWithForm>
  );
}
export default PopupAvatar;

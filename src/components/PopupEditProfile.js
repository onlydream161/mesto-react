import PopupWithForm from "./PopupWithForm";
import React from "react";
function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="popup-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
    >
      <input
        className="popup__input  popup__input_valve_name"
        required
        type="text"
      />
      <span className="popup__error" id="firstname-error"></span>
      <input
        className="popup__input   popup__input_valve_job"
        required
        type="text"
      />
      <span className="popup__error" id="job-error"></span>
    </PopupWithForm>
  );
}

export default PopupEditProfile;

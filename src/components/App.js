import "../App.css";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupAvatar from "./PopupAvatar";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from "./PopupAddCard";
import ImagePopup from "./ImagePopup";
function App() {
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen]=React.useState(false)
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen]=React.useState(false)
  const[isAddPlacePopupOpen,setIsAddPlacePopupOpen]=React.useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard,setSelectedCard]=React.useState({})

  function handleCardClick (card){
    setImagePopupOpen(true)
    setSelectedCard(card)
  }
  function handleEditAvatarClick(){
setIsEditAvatarPopupOpen(true)
  }
function handleEditProfile(){
  setIsEditProfilePopupOpen(true)
}
function handleAddCard(){
  setIsAddPlacePopupOpen(true)
}
  function closeAllpopups(){
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
    setImagePopupOpen(false)
  }
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfile} onAddPlace={handleAddCard} handleCardClick={handleCardClick}/>
        <Footer />
        <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllpopups}/>
        <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllpopups}/>
        <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllpopups}/>
        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllpopups} card={selectedCard}/>
        
      </div>
    </div>
  );
}

export default App;

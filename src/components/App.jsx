import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Main } from './Main';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    description: '',
    avatar: '',
  });
  const [cards, setCards] = useState([]);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const _handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const _handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const _handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const _closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard(null);
  };

  const _handleCardClick = card => {
    setSelectedCard(card);
  };

  const _handleCardLike = card => {
    api.likeCard(card._id).then(newCard => {
      setCards(state =>
        state.map(card => (card._id === newCard._id ? newCard : card)),
      );
    });
  };

  const _handleUpdateUser = ({ name, description }) => {
    api.editUserInfo({ name, about: description }).then(res => {
      setCurrentUser({
        ...currentUser,
        name: res.name,
        description: res.about,
      });
    });
  };

const _handleUpdateAvatar = ({avatar}) => {
  setCurrentUser({...currentUser, avatar})
}

  const _handleDeleteCard = deletedCard => {
    api.deleteCard(deletedCard._id).then(res => {
      console.log(res);

      setCards(state => state.filter(card => card._id !== deletedCard._id));
    });
  };

  useEffect(() => {
    api
      .loadUserInfo()
      .then(res => {
        setCurrentUser({
          name: res.name,
          description: res.about,
          avatar: res.avatar,
          _id: res._id,
        });

        return api.getInitialCards();
      })
      .then(cards => {
        setCards([...cards]);
      });
  }, []);

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="wrapper">
          <Header />

          <Main
            cards={cards}
            onEditProfile={_handleEditProfileClick}
            onAddPlace={_handleAddPlaceClick}
            onEditAvatar={_handleEditAvatarClick}
            onCardClick={_handleCardClick}
            onCardLike={_handleCardLike}
            onCardDelete={_handleDeleteCard}
          />

          <Footer />
        </div>

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={_closeAllPopups}
          onUpdateUser={_handleUpdateUser}
        />

        <PopupWithForm
          name="add-photo"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClose={_closeAllPopups}
        >
          <fieldset className="form__inputs" form="form_image">
            <label className="form__label" htmlFor="input_image_description">
              <input
                className="form__input form__input_field_image-description"
                id="input_image_description"
                data-user-field="name"
                name="name"
                type="text"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span
                className="form__input-error"
                id="input_image_description-error"
              ></span>
            </label>

            <label className="form__label" htmlFor="input_image_src">
              <input
                className="form__input form__input_field_image-src"
                id="input_image_src"
                data-user-field="link"
                name="link"
                type="url"
                placeholder="Ссылка на картинку"
                required
              />

              <span
                className="form__input-error"
                id="input_image_src-error"
              ></span>
            </label>
          </fieldset>
        </PopupWithForm>

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={_closeAllPopups}
          onUpdateAvatar={_handleUpdateAvatar}
        />

        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          isOpen={isConfirmPopupOpen}
        />

        <ImagePopup card={selectedCard} onClose={_closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

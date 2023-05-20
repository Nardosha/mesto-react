import React, {useState} from 'react';
import cardImage from '../images/page/content-photos/content-photos_item-1.jpg'
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Main} from "./Main";
import {PopupWithForm} from "./PopupWithForm";
import {popupOptions} from "../utils/constants";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)

    const _handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    }

    const _handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }

    const _handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    }

    const _closeAllPopups = (popup) => {
        const openedPopups = document.querySelectorAll(popupOptions.openedPopupSelector)
        openedPopups.forEach(popup => {
            popup.classList.remove(popupOptions.openedPopupClass);
        })
    }

    return (
        <div className="root">
            <div className="wrapper">
                <Header/>

                <Main
                    onEditProfile={_handleEditProfileClick}
                    onAddPlace={_handleAddPlaceClick}
                    onEditAvatar={_handleEditAvatarClick}
                />

                <Footer/>
            </div>

            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}
                           onClose={_closeAllPopups}>
                <fieldset className="form__inputs" form="form_profile">
                    <label className="form__label" htmlFor="input_user_full_name">
                        <input className="form__input form__input_field_user-full-name"
                               id="input_user_full_name"
                               data-user-field="userFullName"
                               name="name"
                               type="text"
                               placeholder="Введите имя"
                               minLength="2"
                               maxLength="40"
                               required
                        />
                        <span className="form__input-error" id="input_user_full_name-error"></span>
                    </label>

                    <label className="form__label" htmlFor="input_user_description">
                        <input className="form__input form__input_field_user-description"
                               id="input_user_description"
                               data-user-field="userDescription"
                               name="about"
                               type="text"
                               placeholder="Введите описание"
                               minLength="2"
                               maxLength="200"
                               required
                        />
                        <span className="form__input-error" id="input_user_description-error"></span>
                    </label>

                </fieldset>

            </PopupWithForm>

            <PopupWithForm name="add-photo" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={_closeAllPopups}>
                <fieldset className="form__inputs" form="form_image">
                    <label className="form__label" htmlFor="input_image_description">
                        <input className="form__input form__input_field_image-description"
                               id="input_image_description"
                               data-user-field="name"
                               name="name"
                               type="text"
                               placeholder="Название"
                               minLength="2"
                               maxLength="30"
                               required
                        />
                        <span className="form__input-error" id="input_image_description-error"></span>
                    </label>

                    <label className="form__label" htmlFor="input_image_src">
                        <input className="form__input form__input_field_image-src"
                               id="input_image_src"
                               data-user-field="link"
                               name="link"
                               type="url"
                               placeholder="Ссылка на картинку"
                               required
                        />

                        <span className="form__input-error" id="input_image_src-error"></span>
                    </label>

                </fieldset>
            </PopupWithForm>

            <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={_closeAllPopups}>
                <fieldset className="form__inputs" form="form_avatar">
                    <label className="form__label" htmlFor="input_avatar_src">
                        <input className="form__input form__input_field_avatar-src"
                               id="input_avatar_src"
                               name="avatar"
                               type="url"
                               placeholder="Ссылка на картинку"
                               required
                        />

                        <span className="form__input-error" id="input_avatar_src-error"></span>
                    </label>

                </fieldset>
            </PopupWithForm>

            <PopupWithForm name="confirm" title="Вы уверены?" isOpen={isConfirmPopupOpen}/>

            <dialog className="popup popup-show-photo" data-popup-type="SHOW" open>
                <div className="popup-show-photo__container">
                    <button className="button popup__button-close"
                            type="button"
                            data-action="CLOSE"
                            aria-label="Закрыть">
                    </button>
                    <img className="popup-show-photo__photo" src="src/components/App#" alt="Описание фото"/>
                    <h2 className="popup-show-photo__description">Описание фото</h2>
                </div>
            </dialog>

            <template className="photo-template">
                <li className="photo-item">
                    <button className="button photo-item__button-delete" type="button" aria-label="Удалить"
                            data-action="DELETE"></button>
                    <img className="photo-item__img"
                         src={cardImage}
                         alt="Описание фото"
                         data-action="PREVIEW"
                    />
                    <div className="photo-item__info">
                        <h2 className="photo-item__description">Описание фото</h2>

                        <div className="photo-item__like-stats">
                            <button className="button photo-item__button-like" type="button"
                                    data-action="LIKE"></button>
                            <div className="photo-item__like-count">0</div>
                        </div>
                    </div>
                </li>
            </template>
        </div>
    );
}

export default App;
import React from 'react';
import cardImage from '../images/page/content-photos/content-photos_item-1.jpg'
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Main} from "./Main";

function App() {
    return (
        <div className="root">
            <div className="wrapper">
                <Header/>

                <Main />

                <Footer/>
            </div>

            <dialog className="popup popup_edit" data-popup-type="EDIT" open>
                <div className="popup__container">
                    <button className="button popup__button-close"
                            type="button"
                            data-action="CLOSE"
                            aria-label="Закрыть">
                    </button>

                    <h2 className="popup__title">Редактировать профиль</h2>

                    <form className="popup__form form" action="src/components/App#App.jsx" name="form_profile"
                          id="form_profile">
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

                        <button className="form__button-submit"
                                type="submit"
                                id="form_button_submit"
                                data-action="SUBMIT">Сохранить
                        </button>
                    </form>
                </div>
            </dialog>

            <dialog className="popup popup-add-photo" data-popup-type="ADD" open>
                <div className="popup__container">
                    <button className="button popup__button-close"
                            type="button"
                            data-action="CLOSE"
                            aria-label="Закрыть">
                    </button>

                    <h2 className="popup__title">Новое место</h2>

                    <form className="popup__form form" action="src/components/App#App.jsx" name="form_image"
                          id="form_image">
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

                        <button className="form__button-submit"
                                type="submit"
                                data-action="SUBMIT">Сохранить
                        </button>
                    </form>
                </div>
            </dialog>

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

            <dialog className="popup popup_update-avatar" open>
                <div className="popup__container">
                    <button className="button popup__button-close"
                            type="button"
                            data-action="CLOSE"
                            aria-label="Закрыть">
                    </button>

                    <h2 className="popup__title">Обновить аватар</h2>

                    <form className="popup__form form" action="src/components/App#App.jsx" name="form_avatar"
                          id="form_avatar">
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

                        <button className="form__button-submit"
                                type="submit"
                                data-action="SUBMIT">Сохранить
                        </button>
                    </form>
                </div>
            </dialog>

            <dialog className="popup confirmation-popup">
                <div className="popup__container">
                    <button className="button popup__button-close"
                            type="button"
                            data-action="CLOSE"
                            aria-label="Закрыть">
                    </button>

                    <h2 className="popup__title">Вы уверены?</h2>

                    <form className="popup__form form" action="src/components/App#App.jsx" name="form_confirm"
                          id="form_confirm">
                        <button className="popup__button-submit form__button-submit"
                                type="submit"
                                id="confirm_button_submit"
                                data-action="SUBMIT">Да
                        </button>
                    </form>
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
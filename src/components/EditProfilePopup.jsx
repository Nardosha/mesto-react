import { PopupWithForm } from './PopupWithForm';
import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name || '');
  const [description, setDescription] = useState(currentUser.description || '');

  const _handleNameChange = e => {
    setName(e.target.value);
  };

  const _handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const _handleSubmit = e => {
    e.preventDefault();

    onUpdateUser({
      name,
      description,
    });

    onClose();
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.description);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={_handleSubmit}
    >
      <fieldset className="form__inputs" form="form_profile">
        <label className="form__label" htmlFor="input_user_full_name">
          <input
            className="form__input form__input_field_user-full-name"
            id="input_user_full_name"
            data-user-field="userFullName"
            name="name"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="40"
            required
            value={name}
            onChange={_handleNameChange}
          />
          <span
            className="form__input-error"
            id="input_user_full_name-error"
          ></span>
        </label>

        <label className="form__label" htmlFor="input_user_description">
          <input
            className="form__input form__input_field_user-description"
            id="input_user_description"
            data-user-field="userDescription"
            name="about"
            type="text"
            placeholder="Введите описание"
            minLength="2"
            maxLength="200"
            required
            value={description}
            onChange={_handleDescriptionChange}
          />
          <span
            className="form__input-error"
            id="input_user_description-error"
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

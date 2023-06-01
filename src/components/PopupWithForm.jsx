import React, { useContext } from 'react';
import { popupOptions } from '../utils/constants';
import { AppContext } from '../contexts/AppContext';

export const PopupWithForm = props => {
  const { name, title, isOpen, onSubmit } = props;
  const { isLoading, closeAllPopups } = useContext(AppContext);

  return (
    <dialog
      className={`popup popup_type_${name} ${
        isOpen ? popupOptions.openedPopupClass : ''
      }`}
      open
    >
      <div className="popup__container">
        <button
          className="button popup__button-close"
          type="button"
          data-action="CLOSE"
          aria-label="Закрыть"
          onClick={closeAllPopups}
        ></button>

        <h2 className="popup__title">{title}</h2>

        <form
          className="popup__form form"
          action="#"
          name={name}
          id={name}
          onSubmit={onSubmit}
        >
          {props.children}

          <button
            className="form__button-submit"
            type="submit"
            id="form_button_submit"
            data-action="SUBMIT"
          >
            {isLoading ? 'Сохранение...' : 'Сохранить'}
          </button>
        </form>
      </div>
    </dialog>
  );
};

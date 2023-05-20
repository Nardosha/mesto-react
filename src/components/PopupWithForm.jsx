import React from "react";
import {popupOptions} from "../utils/constants";

export const PopupWithForm = (props) => {
    const {name, title, isOpen, onClose} = props

    return (
        <dialog
            className={`popup popup_type_${name} ${isOpen ? popupOptions.openedPopupClass : ''}`}
            open>
            <div className="popup__container">
                <button className="button popup__button-close"
                        type="button"
                        data-action="CLOSE"
                        aria-label="Закрыть"
                        onClick={onClose}
                >
                </button>

                <h2 className="popup__title">{title}</h2>

                <form className="popup__form form"
                      action="src/components/App#App.jsx"
                      name={name}
                      id={name}
                >
                    {props.children}

                    <button className="form__button-submit"
                            type="submit"
                            id="form_button_submit"
                            data-action="SUBMIT"
                    >
                        Сохранить
                    </button>
                </form>
            </div>
        </dialog>
    )
}
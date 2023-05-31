import { PopupWithForm } from "./PopupWithForm";
import React, { useRef } from "react";

export const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const avatarLinkRef = useRef();

  const _handleSubmit = (e) => {
    e.preventDefault()

    onUpdateAvatar({avatar: avatarLinkRef.current.value});

    onClose();
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={_handleSubmit}
    >
      <fieldset className="form__inputs" form="form_avatar">
        <label className="form__label" htmlFor="input_avatar_src">
          <input
            ref={avatarLinkRef}
            className="form__input form__input_field_avatar-src"
            id="input_avatar_src"
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            required
          />

          <span
            className="form__input-error"
            id="input_avatar_src-error"
          ></span>
        </label>
      </fieldset>
    </PopupWithForm>
  )
}
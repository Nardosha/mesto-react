import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { cardOptions } from '../utils/constants';

function Card({ card, onCardClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id
  const isLiked = card.likes.find(user => user._id === currentUser._id);
  console.log(isOwn, card, isLiked);

  return (
    <li className="photo-item">
      {isOwn && (
        <button
          className="button photo-item__button-delete"
          type="button"
          aria-label="Удалить"
          data-action="DELETE"
        ></button>
      )}

      <img
        className="photo-item__img"
        src={card.link}
        alt="Описание фото"
        data-action="PREVIEW"
        onClick={() => onCardClick(card)}
      />
      <div className="photo-item__info">
        <h2 className="photo-item__description">{card.name}</h2>

        <div className="photo-item__like-stats">
          <button
            className={`button photo-item__button-like ${
              isLiked && cardOptions.buttonLikeActiveClass
            }`}
            type="button"
            data-action="LIKE"
          ></button>
          <div className="photo-item__like-count">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}
export { Card };

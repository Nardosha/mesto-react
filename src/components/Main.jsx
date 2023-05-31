import React, { useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { Card } from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export const Main = props => {
  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then(cards => {
      setCards([...cards]);
    });
  }, []);
  return (
    <main className="page">
      <section className="profile">
        <div className="profile__info-container">
          <button
            className="profile__avatar-button"
            type="button"
            onClick={props.onEditAvatar}
          >
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          </button>
          <div className="profile__settings">
            <h1 className="profile__full-name" data-user-field="userFullName">
              {currentUser.name}
            </h1>
            <p
              className="profile__description"
              data-user-field="userDescription"
            >
              {currentUser.description}
            </p>
            <button
              className="button profile__edit-button"
              data-action="OPEN"
              data-action-type="EDIT"
              type="button"
              aria-label="Редактировать"
              onClick={props.onEditProfile}
            />
          </div>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          aria-label="Загрузить"
          data-action="OPEN"
          data-action-type="ADD"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="content-photos">
        <ul className="content-photos__list">
          {cards.map((card, index) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
};

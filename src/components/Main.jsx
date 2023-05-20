import React, {useEffect, useState} from "react";
import avatar from "../images/page/avatar.jpg";
import {api} from "../utils/api";

export const Main = (props) => {
    const [userName, setUserName] = useState(null)
    const [userDescriptions, setUserDescriptions] = useState(null)
    const [userAvatar, setUserAvatar] = useState(null)
    const [cards, setCards] = useState([])

    useEffect(()=> {
        api.loadUserInfo()
            .then(res => {
                console.log('userInfo', res)

                setUserName(res.name);
                setUserDescriptions(res.about);
                setUserAvatar(res.avatar);

              return api.getInitialCards()
            })
            .then(cards => {
                setCards([...cards])
                console.log('cards', cards)
            })
    }, [])
    return (
        <main className="page">
            <section className="profile">
                <div className="profile__info-container">
                    <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
                    </button>
                    <div className="profile__settings">
                        <h1 className="profile__full-name" data-user-field="userFullName">{userName}</h1>
                        <p className="profile__description" data-user-field="userDescription">{userDescriptions}</p>
                        <button className="button profile__edit-button" data-action="OPEN"
                                data-action-type="EDIT" type="button"
                                aria-label="Редактировать"
                                onClick={props.onEditProfile}
                        />
                    </div>
                </div>
                <button className="button profile__add-button" type="button" aria-label="Загрузить"
                        data-action="OPEN"
                        data-action-type="ADD"
                        onClick={props.onAddPlace}
                />
            </section>

            <section className="content-photos">
                <ul className="content-photos__list">
                    {cards.map((card, index) => (
                        <li key={index} className="photo-item">
                            <button className="button photo-item__button-delete" type="button" aria-label="Удалить"
                                    data-action="DELETE"></button>
                            <img className="photo-item__img"
                                 src={card.link}
                                 alt="Описание фото"
                                 data-action="PREVIEW"
                            />
                                <div className="photo-item__info">
                                    <h2 className="photo-item__description">{card.name}</h2>

                                    <div className="photo-item__like-stats">
                                        <button className="button photo-item__button-like" type="button"
                                                data-action="LIKE"></button>
                                        <div className="photo-item__like-count">{card.likes.length}</div>
                                    </div>
                                </div>
                        </li>
                    ))}
                </ul>
            </section>

        </main>
    )
}
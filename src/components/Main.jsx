import React from "react";
import avatar from "../images/page/avatar.jpg";

export const Main = () => {
    return (
        <main className="page">
            <section className="profile">
                <div className="profile__info-container">
                    <button className="profile__avatar-button" type="button">
                        <img className="profile__avatar" src={avatar} alt="Аватар"/>
                    </button>
                    <div className="profile__settings">
                        <h1 className="profile__full-name" data-user-field="userFullName"></h1>
                        <p className="profile__description" data-user-field="userDescription"></p>
                        <button className="button profile__edit-button" data-action="OPEN"
                                data-action-type="EDIT" type="button"
                                aria-label="Редактировать"></button>
                    </div>
                </div>
                <button className="button profile__add-button" type="button" aria-label="Загрузить"
                        data-action="OPEN"
                        data-action-type="ADD"></button>
            </section>

            <section className="content-photos">
                <ul className="content-photos__list"></ul>
            </section>

        </main>
    )
}
import {popupOptions} from "../utils/constants";

export const ImagePopup = ({card, onClose, isOpen}) => {

    return (card &&
        <dialog className={`popup popup-show-photo ${card ? popupOptions.openedPopupClass : ''}`} data-popup-type="SHOW" open>
            <div className="popup-show-photo__container">
                <button className="button popup__button-close"
                        type="button"
                        data-action="CLOSE"
                        aria-label="Закрыть"
                        onClick={onClose}
                >
                </button>
                <img className="popup-show-photo__photo" src={card.link} alt={card.name} />
                    <h2 className="popup-show-photo__description">{card.name}</h2>
            </div>
        </dialog>
    )
}
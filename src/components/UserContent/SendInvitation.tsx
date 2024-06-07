import closeButton from "../../images/CloseButton.svg";

export function SendInvitation() {
  return (
    <div className="send-invitation">
      <div className="send-invitation__close">
        <img src={closeButton} alt="close" />
      </div>
      <div className="send-invitation__title">Отправьте сообщение</div>
      <div className="send-invitation__form">
        <div className="send-invitation__email">
          <div className="send-invitation__email-input"></div>
        </div>
        <div className="send-invitation__filter"></div>
        <div className="send-invitation__send-button">
          Отправить приглашение
        </div>
      </div>
    </div>
  );
}

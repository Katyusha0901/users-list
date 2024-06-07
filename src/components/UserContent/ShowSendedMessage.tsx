import "../../styles/ShowSendedMessage.css";
interface Props {
  emailData: string;
  setSendedInvitationFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ShowSendedMessage: React.FC<Props> = ({
  emailData,
  setSendedInvitationFunction,
}) => {
  return (
    <div className="show-message">
      <div className="show-message__content">
        {emailData === "Email" ? (
          <div className="show-message__title">
            Приглашение отправлено на почту example@email.com
          </div>
        ) : (
          <div className="show-message__title">
            Приглашение отправлено на почту {emailData}
          </div>
        )}
        <div
          className="show-message__button"
          onClick={() => setSendedInvitationFunction(false)}
        >
          Закрыть
        </div>
      </div>
    </div>
  );
};

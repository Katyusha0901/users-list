import closeButton from "../../images/CloseButton.svg";
import arrow from "../../images/arrow.svg";
import "../../styles/SendInvitation.css";
import { useState } from "react";
import { Rules } from "./Rules";

interface Props {
  setAddUserFunciton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SendInvitation: React.FC<Props> = ({ setAddUserFunciton }) => {
  const [isClickArrow, setIsClickArrow] = useState<boolean>(false);

  return isClickArrow ? (
    <>
      <div className="send-invitation">
        <div className="send-invitation__header">
          <div
            className="send-invitation__close"
            onClick={() => {
              setAddUserFunciton(false);
              setIsClickArrow(false);
            }}
          >
            <img src={closeButton} alt="close" />
          </div>
        </div>
        <div className="send-invitation__title">Отправьте приглашение</div>
        <div className="send-invitation__form">
          <div className="send-invitation__form-field send-invitation__email ">
            <input
              className="send-invitation__email-input"
              value="Email"
            ></input>
          </div>
          <div
            className="send-invitation__form-field send-invitation__filter"
            onClick={() => setIsClickArrow(false)}
          >
            <div className="send-invitation__filter-text  ">
              Выберите права доступа
            </div>
            <img src={arrow} alt="arrow" />
          </div>
          <div
            className="send-invitation__form-field send-invitation__send-button"
            onClick={() => {
              setAddUserFunciton(false);
              setIsClickArrow(false);
            }}
          >
            Отправить приглашение
          </div>
        </div>
      </div>
      <Rules />
    </>
  ) : (
    <div className="send-invitation">
      <div className="send-invitation__header">
        <div
          className="send-invitation__close"
          onClick={() => {
            setAddUserFunciton(false);
            setIsClickArrow(false);
          }}
        >
          <img src={closeButton} alt="close" />
        </div>
      </div>
      <div className="send-invitation__title">Отправьте приглашение</div>
      <div className="send-invitation__form">
        <div className="send-invitation__form-field send-invitation__email ">
          <input className="send-invitation__email-input" value="Email"></input>
        </div>
        <div
          className="send-invitation__form-field send-invitation__filter"
          onClick={() => setIsClickArrow(true)}
        >
          <div className="send-invitation__filter-text">
            Выберите права доступа
          </div>
          <img src={arrow} alt="arrow" />
        </div>
        <div
          className="send-invitation__form-field send-invitation__send-button"
          onClick={() => {
            setAddUserFunciton(false);
            setIsClickArrow(false);
          }}
        >
          Отправить приглашение
        </div>
      </div>
    </div>
  );
};

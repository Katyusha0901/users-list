import closeButton from "../../images/CloseButton.svg";
import arrow from "../../images/arrow.svg";
import "../../styles/SendInvitation.css";
import { useState, useContext } from "react";
import { PermissionsContext } from "../../PermissionsContext";
import { Rules } from "./Rules";
import { UsersContext } from "../../UsersContext";
import userImage from "../../images/user.svg";

interface Props {
  setAddUserFunciton: React.Dispatch<React.SetStateAction<boolean>>;
  emailData: string;
  setEmailFunction: React.Dispatch<React.SetStateAction<string>>;
  setSendedInvitationFunction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SendInvitation: React.FC<Props> = ({
  setAddUserFunciton,
  emailData,
  setEmailFunction,
  setSendedInvitationFunction,
}) => {
  const [isClickArrow, setIsClickArrow] = useState<boolean>(false);
  const { takeAllPermissions } = useContext(PermissionsContext);
  const [permissionStatus, setPermissionStatus] = useState<
    { permissionName: string; isChecked: boolean }[]
  >(permitionsStatusObject());
  const { users, setUsers } = useContext(UsersContext);

  function permitionsStatusObject() {
    return takeAllPermissions().map((permission: string) => {
      return { permissionName: permission, isChecked: false };
    });
  }

  function checkedPermissions() {
    const permissions: string[] = [];

    permissionStatus.forEach(
      (permission: { permissionName: string; isChecked: boolean }) => {
        if (permission.isChecked) {
          permissions.push(permission.permissionName);
        }
      }
    );

    if (permissions.length > 0) {
      return permissions;
    }

    return permissionStatus.map(
      (permission: { permissionName: string; isChecked: boolean }) =>
        permission.permissionName
    );
  }
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
              value={emailData}
              onChange={(e) => setEmailFunction(e.target.value)}
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
              setSendedInvitationFunction(true);
              setUsers([
                {
                  name: "Пользователь",
                  email: emailData,
                  permissions: checkedPermissions(),
                  image: userImage,
                },
                ...users,
              ]);
            }}
          >
            Отправить приглашение
          </div>
        </div>
      </div>
      <Rules
        permissionStatusData={permissionStatus}
        setPermissionStatusFunction={setPermissionStatus}
      />
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
          <input
            className="send-invitation__email-input"
            value={emailData}
            onChange={(e) => setEmailFunction(e.target.value)}
          ></input>
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
            setSendedInvitationFunction(true);
            setUsers([
              {
                name: "Пользователь",
                email: emailData,
                permissions: checkedPermissions(),
                image: userImage,
              },
              ...users,
            ]);
          }}
        >
          Отправить приглашение
        </div>
      </div>
    </div>
  );
};

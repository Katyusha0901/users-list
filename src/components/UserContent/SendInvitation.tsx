import closeButton from "../../images/CloseButton.svg";
import arrow from "../../images/arrow.svg";
import "../../styles/SendInvitation.css";
import { useState, useContext } from "react";
import { PermissionsContext } from "../../PermissionsContext";

export function SendInvitation() {
  const [isClickArrow, setIsClickArrow] = useState<boolean>(false);
  const { takeAllPermissions } = useContext(PermissionsContext);
  const [permissionStatus, setPermissionStatus] = useState<
    { permissionName: string; isChecked: boolean }[]
  >(permitionsStatusObObject());
  function permitionsStatusObObject() {
    return takeAllPermissions().map((permission: string) => {
      return { permissionName: permission, isChecked: false };
    });
  }

  return isClickArrow ? (
    <>
      (
      <div className="send-invitation">
        <div className="send-invitation__header">
          <div className="send-invitation__close">
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
          <div className="send-invitation__form-field send-invitation__filter">
            <div className="send-invitation__filter-text ">
              Выберите права доступа
            </div>
            <img
              src={arrow}
              alt="arrow"
              onClick={() => setIsClickArrow(false)}
            />
          </div>
          <div className="send-invitation__send-button">
            Отправить приглашение
          </div>
        </div>
      </div>
      <div className="send-invitation__rules">
        {permissionStatus.map(
          (permission: { permissionName: string; isChecked: boolean }) => {
            return permission.isChecked ? (
              <div className="send-invitation__rules-item">
                <div
                  className="send-invitation__checkbox-clicked"
                  onClick={() => {
                    setPermissionStatus(
                      permissionStatus.map(
                        (permission: {
                          permissionName: string;
                          isChecked: boolean;
                        }) => {
                          return {
                            permissionName: permission.permissionName,
                            isChecked: !permission.isChecked,
                          };
                        }
                      )
                    );
                  }}
                ></div>
                <div className="send-invitation__permission">
                  {permission.permissionName}
                </div>
              </div>
            ) : (
              <div className="send-invitation__rules-item">
                <div className="send-invitation__checkbox"></div>
                <div className="send-invitation__permission">
                  {permission.permissionName}
                </div>
              </div>
            );
          }
        )}
      </div>
      )
    </>
  ) : (
    <div className="send-invitation">
      <div className="send-invitation__header">
        <div className="send-invitation__close">
          <img src={closeButton} alt="close" />
        </div>
      </div>
      <div className="send-invitation__title">Отправьте приглашение</div>
      <div className="send-invitation__form">
        <div className="send-invitation__form-field send-invitation__email ">
          <input className="send-invitation__email-input" value="Email"></input>
        </div>
        <div className="send-invitation__form-field send-invitation__filter">
          <div className="send-invitation__filter-text ">
            Выберите права доступа
          </div>
          <img src={arrow} alt="arrow" onClick={() => setIsClickArrow(true)} />
        </div>
        <div className="send-invitation__send-button">
          Отправить приглашение
        </div>
      </div>
    </div>
  );
}

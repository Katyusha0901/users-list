import check from "../../images/check.svg";
import { useState, useContext } from "react";
import { PermissionsContext } from "../../PermissionsContext";
import "../../styles/Rules.css";

interface Props {}

export const Rules: React.FC<Props> = () => {
  const { takeAllPermissions } = useContext(PermissionsContext);

  const [permissionStatus, setPermissionStatus] = useState<
    { permissionName: string; isChecked: boolean }[]
  >(permitionsStatusObObject());

  function permitionsStatusObObject() {
    return takeAllPermissions().map((permission: string) => {
      return { permissionName: permission, isChecked: false };
    });
  }
  return (
    <div className="rules">
      {permissionStatus.map(
        (permission: { permissionName: string; isChecked: boolean }) => {
          return permission.isChecked ? (
            <div className="rules__item">
              <div
                className="rules__checkbox rules__checkbox_clicked"
                onClick={() => {
                  setPermissionStatus(
                    permissionStatus.map(
                      (permissionInformation: {
                        permissionName: string;
                        isChecked: boolean;
                      }) =>
                        permissionInformation.permissionName ===
                        permission.permissionName
                          ? {
                              permissionName:
                                permissionInformation.permissionName,
                              isChecked: !permission.isChecked,
                            }
                          : permissionInformation
                    )
                  );
                }}
              >
                <img src={check} alt="check" className="rules__check" />
              </div>
              <div>{permission.permissionName}</div>
            </div>
          ) : (
            <div className="rules__item">
              <div
                className="rules__checkbox"
                onClick={() => {
                  setPermissionStatus(
                    permissionStatus.map(
                      (permissionInformation: {
                        permissionName: string;
                        isChecked: boolean;
                      }) =>
                        permissionInformation.permissionName ===
                        permission.permissionName
                          ? {
                              permissionName:
                                permissionInformation.permissionName,
                              isChecked: !permission.isChecked,
                            }
                          : permissionInformation
                    )
                  );
                }}
              ></div>
              <div>{permission.permissionName}</div>
            </div>
          );
        }
      )}
    </div>
  );
};

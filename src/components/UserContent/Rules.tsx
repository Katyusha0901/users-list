import check from "../../images/check.svg";
import { useState, useContext } from "react";
import { PermissionsContext } from "../../PermissionsContext";

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
    <div className="send-invitation__rules">
      {permissionStatus.map(
        (permission: { permissionName: string; isChecked: boolean }) => {
          return permission.isChecked ? (
            <div className="send-invitation__rules-item">
              <div
                className="send-invitation__checkbox send-invitation__checkbox_clicked"
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
                <img
                  src={check}
                  alt="check"
                  className="send-invitation__check"
                />
              </div>
              <div className="send-invitation__permission">
                {permission.permissionName}
              </div>
            </div>
          ) : (
            <div className="send-invitation__rules-item">
              <div
                className="send-invitation__checkbox"
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
              <div className="send-invitation__permission">
                {permission.permissionName}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

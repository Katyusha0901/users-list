import "../../styles/ChangeUserInformation.css";
import { UsersContext } from "../../context/UsersContext";
import { useContext, useState, useEffect } from "react";
import { Rules } from "./Rules";
import { PermissionsContext } from "../../context/PermissionsContext";
import { User } from "../../types";

interface Props {
  userPermissions: string[];
  userName: string;
}

export const ChangeUserInformation: React.FC<Props> = ({
  userPermissions,
  userName,
}) => {
  const { users, setUsers } = useContext(UsersContext);
  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const { takeAllPermissions } = useContext(PermissionsContext);

  const [permissionStatus, setPermissionStatus] = useState<
    { permissionName: string; isChecked: boolean }[]
  >(permitionsStatusObject());

  useEffect(() => {
    const permissionsClicked = permissionStatus.map((permission) => {
      if (permission.isChecked) {
        return permission.permissionName;
      }
      return undefined;
    }) as string[];

    setUsers(
      users.map((user: User) => {
        if (user.name === userName) {
          return {
            name: userName,
            email: user.email,
            permissions: permissionsClicked,
            image: user.image,
          };
        }
        return user;
      })
    );
  }, [permissionStatus]);

  function permitionsStatusObject() {
    return takeAllPermissions().map((permission: string) => {
      if (userPermissions.includes(permission)) {
        return { permissionName: permission, isChecked: true };
      }
      return { permissionName: permission, isChecked: false };
    });
  }

  return isEditUser ? (
    <>
      <div className="change-panel">
        <div
          className="change-panel__item"
          onClick={() => {
            setIsEditUser(false);
          }}
        >
          Изменить права доступа
        </div>
        <div className="change-panel__item">Отправить код повторно</div>
        <div className="change-panel__item change-panel__item-delete">
          Удалить
        </div>
      </div>
      <div className="change-panel__rules">
        <Rules
          permissionStatusData={permissionStatus}
          setPermissionStatusFunction={setPermissionStatus}
        />
      </div>
    </>
  ) : (
    <div className="change-panel">
      <div
        className="change-panel__item"
        onClick={() => {
          setIsEditUser(true);
        }}
      >
        Изменить права доступа
      </div>
      <div className="change-panel__item">Отправить код повторно</div>
      <div className="change-panel__item change-panel__item-delete">
        Удалить
      </div>
    </div>
  );
};

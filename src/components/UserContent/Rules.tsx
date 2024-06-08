import check from "../../images/check.svg";
import "../../styles/Rules.css";

interface Props {
  permissionStatusData: { permissionName: string; isChecked: boolean }[];
  setPermissionStatusFunction: React.Dispatch<
    React.SetStateAction<
      {
        permissionName: string;
        isChecked: boolean;
      }[]
    >
  >;
}

export const Rules: React.FC<Props> = ({
  permissionStatusData,
  setPermissionStatusFunction,
}) => {
  return (
    <div className="rules">
      {permissionStatusData.map(
        (permission: { permissionName: string; isChecked: boolean }) => {
          return permission.isChecked ? (
            <div className="rules__item" key={permission.permissionName}>
              <div
                className="rules__checkbox rules__checkbox_clicked"
                onClick={() => {
                  setPermissionStatusFunction(
                    permissionStatusData.map(
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
            <div className="rules__item" key={permission.permissionName}>
              <div
                className="rules__checkbox"
                onClick={() => {
                  setPermissionStatusFunction(
                    permissionStatusData.map(
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

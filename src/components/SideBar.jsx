import "../styles/SideBar.css";
import first from "../images/first.svg";
import second from "../images/second.svg";
import third from "../images/third.svg";
import fourth from "../images/fourth.svg";
import fifth from "../images/fifth.svg";
import sixth from "../images/sixth.svg";
import seventh from "../images/seventh.svg";
import eighth from "../images/eighth.svg";
import ninth from "../images/ninth.svg";
import tenth from "../images/tenth.svg";

export function SideBar() {
  const icons = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
  ];
  const icon = first;
  return (
    <div className="side-bar">
      <div className="side-bar__emblem"></div>
      <div className="side-bar__admin-icon"></div>
      {/* <div className="side-bar__icon"> */}
      {icons.map((icon) => {
        return <img className="side-bar__icon" src={icon} />;
      })}
      {/* <img src={icon} /> */}
      {/* </div> */}
    </div>
  );
}

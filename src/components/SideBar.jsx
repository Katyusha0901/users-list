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
import tenthMobile from "../images/tenthMobile.svg";
import menuBurger from "../images/menuBurger.svg";

import { IsClickedMenuContext } from "../context/IsClickedMenuContext";
import { useContext } from "react";

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

  const iconsMobile = [
    { image: first, name: "Аналитика" },
    { image: second, name: "Профиль" },
    { image: third, name: "Модерация" },
    { image: fourth, name: "Чаты" },
    { image: fifth, name: "Баннеры" },
    { image: sixth, name: "Команда" },
    { image: seventh, name: "Блог" },
    { image: eighth, name: "Курс валют" },
    { image: tenthMobile, name: "Выйти" },
  ];

  const { isClickedMenu, setIsClickedMenu } = useContext(IsClickedMenuContext);

  return isClickedMenu ? (
    <>
      <div className="side-bar">
        <div className="side-bar__emblem"></div>
        <div className="side-bar__admin-icon"></div>
        {icons.map((icon) => {
          return (
            <img className="side-bar__icon" src={icon} alt={icon} key={icon} />
          );
        })}
      </div>
      <div className="side-bar-mobile">
        <img
          className="side-bar-mobile__menu"
          src={menuBurger}
          alt="menu"
          onClick={() => {
            setIsClickedMenu(!isClickedMenu);
          }}
        />
        <div className="side-bar-mobile__header">
          <div className="side-bar-mobile__admin-icon"></div>
          <div className="side-bar-mobile__user">
            <div className="side-bar-mobile__name">Артем Иванов</div>
            <div className="side-bar-mobile__status">Собственник</div>
          </div>
        </div>

        {iconsMobile.map((icon) => {
          return icon.name === "Выйти" ? (
            <>
              <div className="side-bar-mobile__item" key={icon.name}>
                <img
                  className="side-bar-mobile__icon"
                  src={icon.image}
                  alt={icon.name}
                />
                <div className="side-bar-mobile__item-name side-bar-mobile__item-name-red">
                  {icon.name}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="side-bar-mobile__item" key={icon.name}>
                <img
                  className="side-bar-mobile__icon"
                  src={icon.image}
                  alt={icon.name}
                />
                <div className="side-bar-mobile__item-name">{icon.name}</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  ) : (
    <div className="side-bar">
      <div className="side-bar__emblem"></div>
      <div className="side-bar__admin-icon"></div>
      {icons.map((icon) => {
        return (
          <img className="side-bar__icon" src={icon} alt={icon} key={icon} />
        );
      })}
    </div>
  );
}

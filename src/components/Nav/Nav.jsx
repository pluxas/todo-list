import React from "react";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import Button from "../Button/Button";

import "./Nav.scss";

const Nav = ({ gridToList, toggleGridToList }) => {
  return (
    <div className="nav">
      <div className="nav__title">
        <p>Все заметки</p>
      </div>
      {gridToList ? (
        <Button click={toggleGridToList} className="nav__button">
          <GlobalSvgIcons id="grid" />
          <p className="nav__button-title">Сетка</p>
        </Button>
      ) : (
        <Button click={toggleGridToList} className="nav__button">
          <GlobalSvgIcons id="list" />
          <p className="nav__button-title">Список</p>
        </Button>
      )}
    </div>
  );
};

export default Nav;

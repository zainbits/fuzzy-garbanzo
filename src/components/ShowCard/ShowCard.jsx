import React from "react";
import style from "./ShowCard.module.scss";
import * as Si from "react-icons/si";

const ShowCard = ({ name, icon }) => {
  const logo = Si[icon];

  return (
    <div className={style.ShowCard}>
      <div className={style.ShowCard_container}>
        <div className={style.logo_container}>{React.createElement(logo)}</div>
        <div>{name}</div>
      </div>
    </div>
  );
};

export default ShowCard;

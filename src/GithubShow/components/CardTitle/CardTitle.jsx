import React from "react";
import "./style.css";
import CardTitleText from "../CardTitleText/CardTitleText";

function CardTitle({ title }) {
  return (
    <div className="blue">
      <CardTitleText title={title} />
    </div>
  );
}

export default CardTitle;

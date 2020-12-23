import React, { useState, useEffect } from "react";
import PopupCat from "./PopupCat";

export default function Category(props) {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState(null);
  const [color, setColor] = useState(null);

  const handleClick = () => {
    setVisible(true);
    setCategory(props.title);
    setColor(props.color);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id === "popup-window" || e.target.id === "close")
        setVisible(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setVisible(false);
    });
  });

  return (
    <div className="Category">
      <div className="categories">
        <h1>{props.title}</h1>
        <img
          className="img-fluid icon"
          id={props.id}
          src={props.src}
          alt={props.alt}
          onClick={(e) => handleClick(e)}
        ></img>
      </div>

      <PopupCat
        popup={visible ? { display: "flex" } : { display: "none" }}
        category={category}
        color={color}
      />
    </div>
  );
}

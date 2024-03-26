import React from "react";
import { useState } from "react";

export const navData = [
  { id: 0, text: "main", link: "#" },
  { id: 1, text: "about", link: "#about" },
  { id: 2, text: "projects", link: "#projects" },
  { id: 3, text: "contact", link: "#contact" },
];

const SideBar = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHover, setHover] = useState(false);

  // change to pressed button style if it's in default button style
  // when clicked again in pressed button style, it'll stays in pressed button style
  const handleClick = () => {
    if (!isPressed) {
      setIsPressed(!isPressed);
    }
  };

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };

  // default button style
  const defaultBtnStyle = {
    height: isHover ? "14px" : "8px",
    width: isHover ? "14px" : "8px",
    borderWidth: "1px",
    border: "solid",
    borderColor: "var(--primary-color)",
    backgroundColor: "var(--secondary-color)",
    borderRadius: "50%",
    transition: "width 0.3s, height 0.3s",
  };

  // pressed button style
  const pressedBtnStyle = {
    height: isHover ? "20px" : "14px",
    width: isHover ? "20px" : "14px",
    border: "solid",
    borderWidth: "1px",
    backgroundColor: "var(--primary-color)",
    borderRadius: "50%",
    borderColor: "var(--secondary-color)",
    transition: "width 0.3s, height 0.3s",
  };

  return (
    <div
      style={isPressed ? pressedBtnStyle : defaultBtnStyle}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    ></div>
  );
};

export default SideBar;

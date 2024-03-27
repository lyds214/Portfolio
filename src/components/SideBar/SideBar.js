import React from "react";
import styles from "./SideBar.module.css";
import { useState } from "react";

export const navBar = [
  { id: 0, title: "MAIN" },
  { id: 1, title: "ABOUT" },
  { id: 2, title: "PROJECTS" },
  { id: 3, title: "CONTACT" },
];

const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (id) => {
    setIsClicked(id === isClicked ? null : id);
  };

  return navBar.map((data) => {
    return (
      <div className={styles.container} key={data.id}>
        {/* If clicked, the style button would change to its clicked state with the size of 16x16. If hovered, the size of the button would be 20x20 */}
        <button
          className={`${styles.sideBarBtn} ${
            data.id === isClicked ? styles.clicked : ""
          }`}
          onClick={() => handleClick(data.id)}
        />
        <small>{data.title}</small>
      </div>
    );
  });
};

export default SideBar;

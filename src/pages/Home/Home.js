import React from "react";
import styles from "./Home.module.css";
import ellipse from "../../assets/ellipse.svg";

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={ellipse} />
      <div>
        <div className={styles.circle2}>
          <div className={styles.circle1}>
            <div className={styles.nameContainer}>
              <h1>LYDIA YANG</h1>
              <div className={styles.underline}>
                <div className={styles.diamond} />
                <div className={styles.line} />
                <div className={styles.diamond} />
              </div>
              <button>CONTINUE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

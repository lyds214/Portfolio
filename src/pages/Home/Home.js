import React from "react";
import styles from "./Home.module.css";
import ellipse from "../../assets/ellipse.svg";

const Home = () => {
  const handleClick = () => {
    console.log("Click");
  };
  return (
    <>
      {/* <div className={styles.doubleLines}>
        <div className={styles.line1} />
        <div className={styles.line2} />
      </div> */}

      <div className={styles.outlinedCircle} />
      {/* <div className={styles.filledCircle} /> */}
      <div className={styles.container}>
        {/* <img src={ellipse} /> */}
        <div>
          <div className={styles.outerCircle}>
            {/* <div className={styles.innerCircle}> */}
            <div className={styles.nameContainer}>
              <h1>LYDIA YANG</h1>
              <div className={styles.underline}>
                <div className={styles.diamond} />
                <div id={styles.line} />
                <div className={styles.diamond} />
              </div>
              <button onClick={handleClick}>CONTINUE</button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

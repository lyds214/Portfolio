import React from "react";
import styles from "./Home.module.css";
import ellipse from "../../assets/ellipse.svg";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>LYDIA YANG</h1>
        <div className={styles.underline}>
          <div className={styles.diamond} />
          <div className={styles.line} />
          <div className={styles.diamond} />
        </div>
        <button>CONTINUE</button>
      </div>
    </>
  );
};

export default Home;
{
  /* <>
<img src={ellipse} />
<div className={styles.outerCircle}>
  <div className={styles.circle2}>
    <div className={styles.circle1}>
      <h1>LYDIA YANG</h1>
      <button>CONTINUE</button>
    </div>
  </div>
</div>
</> */
}

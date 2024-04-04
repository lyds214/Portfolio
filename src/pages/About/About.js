import React from "react";
import profile from "../../assets/profile.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={profile} />
      </div>
      <div className={styles.content}>
        <h1>ABOUT ME</h1>
        <p>N 36 ° 42' 5.257" W 118 ° 25' 21.589"</p>
        <div className={styles.line} />
        <div style={{ marginTop: "8px" }}>
          <small>INFO</small>
        </div>
        <p>A tea drinker in the day, and a programmer in the night.</p>
        <p>
          I specialize in fullstack development and have an interest in data
          engineering and machine learning/AI.
        </p>
        <p>
          When I am not working or coding, I like to read books or play the
          piano.
        </p>
      </div>
    </>
  );
};

export default About;

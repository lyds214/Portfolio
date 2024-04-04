import React from "react";
import styles from "./Contact.module.css";
import "../../App.css";
import resume from "../../assets/icons/resume/Resume36.svg";
import email from "../../assets/icons/email/Email36.svg";
import linkedin from "../../assets/icons/linkedin/LinkedIn36.svg";
import github from "../../assets/icons/github/GitHub36.svg";

const Contact = () => {
  return (
    <>
      <div className={styles.header}>
        <div className="title">CONTACT</div>
        <p>N 36 ° 42' 5.257" W 118 ° 25' 21.589"</p>
        <div className={styles.underline} />
        <p>CONNECTION CONFIRMED</p>
        <div className={styles.square} style={{ marginBottom: "12px" }} />
        <div className={styles.circle} style={{ marginBottom: "12px" }} />
        <div className={styles.circle} style={{ marginBottom: "12px" }} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Keep In Touch</h1>
          <h4>I'm open! Please reach out if you're interested!</h4>
        </div>
        {/* <img src={resume} alt="resume" />
        <img src={email} alt="email" />
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" /> */}
      </div>
    </>
  );
};

export default Contact;

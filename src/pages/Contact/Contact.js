import React from "react";
import styles from "./Contact.module.css";
import "../../App.css";
import resume from "../../assets/icons/resume/Resume36.svg";
import email from "../../assets/icons/email/Email36.svg";
import linkedin from "../../assets/icons/linkedin/LinkedIn36.svg";
import github from "../../assets/icons/github/GitHub36.svg";

const Contact = () => {
  const icons = [
    { src: resume, alt: "resume" },
    { src: email, alt: "email" },
    { src: linkedin, alt: "linkedin" },
    { src: github, alt: "github" },
  ];

  return (
    <>
      {/* Header */}
      <div className={styles.header}>
        <div className="title">CONTACT</div>
        <p>N 36 ° 42' 5.257" W 118 ° 25' 21.589"</p>
        <div className={styles.underline} />
        <p>CONNECTION CONFIRMED</p>
        <div className={styles.square} style={{ marginBottom: "12px" }} />
        <div className={styles.circle} style={{ marginBottom: "12px" }} />
        <div className={styles.circle} style={{ marginBottom: "12px" }} />
      </div>

      {/* Keep in Touch container */}
      <div className={styles.container}>
        <h1 style={{ margin: "0px" }}>Keep In Touch</h1>
        <h4 style={{ marginTop: "18px", marginBottom: "0px" }}>
          I'm open! Please reach out if you're interested!
        </h4>

        {/* Icons */}
        <div className={styles.imgContainer}>
          {icons.map((icon, index) => {
            return <img key={index} src={icon.src} alt={icon.alt} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;

import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/index.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand_box}>
        <Navbar />
      </div>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary_main}>Welcome to the world of ReactJS</span>
          <span className={styles.thapatext}>Learn JavaScript</span>
        </h1>
        <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`}>Abhay Parsaniya</a>
      </div>
    </header>
  );
};

export default Header;

"use client";

import React from "react";
import styles from "../styles/bestCoffee.module.css";

const BestCoffee = () => {
  return (
    <section className={styles.bestCoffee}>
      <div className={styles.content}>
        <h2>Check out our Best Coffee Beans</h2>
        <button className={styles.button}>Shop Now</button>
      </div>
    </section>
  );
};

export default BestCoffee;

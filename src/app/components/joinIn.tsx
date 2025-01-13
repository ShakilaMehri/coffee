"use client";

import React, { useState } from "react";
import styles from "../styles/joinIn.module.css";

const JoinIn = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for joining! A discount code will be sent to ${email}`);
    setEmail("");
  };

  return (
    <section className={styles.joinIn}>
      <h2 className={styles.title}>Join In & Get 15% off!</h2>
      <p className={styles.description}>
        Sign up for our newsletter and enjoy exclusive discounts!
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default JoinIn;

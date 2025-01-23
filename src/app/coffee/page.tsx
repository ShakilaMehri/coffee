"use client";

import React, { useState } from "react";
import styles from "./coffee.module.css";
import Footer from "../components/footer";
import Header from "../components/header";

const Page = () => {
  const [selectedCoffee, setSelectedCoffee] = useState("Espresso");
  const [size, setSize] = useState("small");
  const [takeAway, setTakeAway] = useState(false);

  const handleOrder = () => {
    alert(
      `You have ordered a ${size} ${selectedCoffee} as ${
        takeAway ? "Takeaway" : "Dine-in"
      }. Enjoy your coffee!`
    );
  };
  return (
    <>
    <Header/>
    <section className={styles.coffeeSection}>
      <div className={styles.coffeeHeader}>
        <h2>Costomize YOur Coffee</h2>
        <p>
          Select your coffee type, cup size, and wheter to take away or dine in.
        </p>
      </div>
      <form className={styles.coffeeForm}>
        {/* Coffee Type Selection */}
        <div className={styles.formGroup}>
          <label htmlFor="coffeeType">Coffee Type:</label>
          <select
            id="coffeeType"
            value={selectedCoffee}
            onChange={(e) => setSelectedCoffee(e.target.value)}
          >
            <option value="Espresso">Espresso</option>
            <option value="Latte">Latte</option>
            <option value="Cappuccino">Cappuccino</option>
            <option value="Americano">Americano</option>
          </select>
        </div>

        {/* Size Selection */}
        <div className={styles.formGroup}>
          <label htmlFor="size">Size:</label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        {/* Takeaway or Dine-in */}
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              checked={takeAway}
              onChange={(e) => setTakeAway(e.target.checked)}
            />
            Takeaway
          </label>
        </div>

        {/* Order Button */}
        <button
          type="button"
          className={styles.orderButton}
          onClick={handleOrder}
        >
          Order Now
        </button>
      </form>
    </section>
    <Footer/>
    </>
  );
};

export default Page;

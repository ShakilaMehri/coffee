"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCoffee, FaBreadSlice, FaIceCream, FaCookie } from "react-icons/fa";
import styles from "../styles/categories.module.css";

const Categories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const categoryData = [
    { icon: <FaCoffee />, title: "Hot Coffee", link: "/coffee" },
    { icon: <FaIceCream />, title: "Cold Coffee", link: "/coldcoffee" },
    { icon: <FaBreadSlice />, title: "Bakery", link: "/bakery" },
    { icon: <FaCookie />, title: "Desserts", link: "/desserts" },
  ];
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        {categoryData.map((category, index) => (
          <a
            href={category.link}
            key={index}
            className={styles.categoryCard}
            data-aos="fade-up"
          >
            <div className={styles.icon}>{category.icon}</div>
            <h3>{category.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;

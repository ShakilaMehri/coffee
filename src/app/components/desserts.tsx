"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/desserts.module.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import axios from "axios";

interface Desserts {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}

const Desserts = () => {
  const [desserts, setDesserts] = useState<Desserts[]>([]);
  const [likedDesserts, setLikedDesserts] = useState<number[]>([]);
  const [cart, setCart] = useState<Desserts[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const itemPerSlide = 4;

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchDesserts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/desserts");
        setDesserts(response.data.desserts);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occured while fetching desserts.");
        setLoading(false);
      }
    };

    fetchDesserts();
  }, []);

  const toggleLike = (dessertId: number) => {
    setLikedDesserts((prev) => {
      if (!Array.isArray(prev)) return [dessertId];
      return prev.includes(dessertId)
        ? prev.filter((id) => id !== dessertId)
        : [...prev, dessertId];
    });
  };

  const toggleCart = (dessert : Desserts) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === dessert.id)
        ? prevCart.filter((item) => item.id !== dessert.id)
        : [...prevCart, dessert]
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, desserts.length - itemPerSlide)  : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= desserts.length - itemPerSlide ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div className={styles.loading}>Loading Desserts ...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (desserts.length === 0) {
    return <div className={styles.noDesserts}>No Desserts Available.</div>
  }
  return (
    <section className={styles.desserts}>
      <h2 className={styles.title} data-aos="fade-up">
        Our Special Dessert
      </h2>
      <div className={styles.sliderContainer}>
        <button onClick={handlePrev} className={styles.arrow}>
          <BiChevronLeft />
        </button>
        <div className={styles.dessertGrid}>
          {desserts.slice(currentIndex, currentIndex + itemPerSlide).map((dessert) => (
            <div
              key={dessert.id}
              className={styles.dessertCard}
              data-aos="zoom-in"
            >
              <div
                className={styles.likeIcon}
                onClick={() => toggleLike(dessert.id)}
              >
                {Array.isArray(likedDesserts) &&
                likedDesserts.includes(dessert.id) ? (
                  <FaHeart />
                ) : (
                  <FiHeart />
                )}
              </div>
              <img
                src={dessert.image}
                alt={dessert.name}
                className={styles.dessertImage}
              />
              <h3 className={styles.dessertName}>{dessert.name}</h3>
              <p className={styles.dessertPrice}>{dessert.price}</p>
              <button className={`${styles.cartButton} ${cart.some((item) => item.id === dessert.id) ? styles.inCart : ""}`} onClick={() => toggleCart(dessert)}>
                {cart.some((item) => item.id === dessert.id) 
                ? "Remove from Cart"
              : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.arrow}>
          <BiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Desserts;

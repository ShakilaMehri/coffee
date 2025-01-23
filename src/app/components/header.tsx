"use client";

import React, { useState, useEffect } from "react";
import { CgScrollV } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/header.module.css";
import { BiX } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </a>
        <button className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label={isMobileMenuOpen ? "closeMenu" : "openMenu"} >
          {isMobileMenuOpen ? <BiX /> : <CiMenuBurger/>}  
        </button>
        <ul 
          className={`${styles.navList}${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/coffee">Coffee</a>
          </li>
          <li>
            <a href="/bakery">Bakery</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contactus">About Us</a>
          </li>
        </ul>

        <div className={styles.rightContent}>
          <a href="/signin" className={styles.navBtn}>
            Sign In
          </a>
        </div>
      </header>

      {/* HeroSection */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h5 data-aos="fade-right" data-aos-duration="1400">
            #Coffee for hot days
          </h5>
          <h1
            data-aos="zoom-in-left"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            - Cold Brew
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1400"
            data-aos-delay="300"
          >
            Boots your productivity and build your mood with a glass of coffee
            in the morning. Coffee has a stimulating effect.
          </p>

          <div
            className={styles.mainHero}
            data-aos="flip-down"
            data-aos-duration="1400"
            data-aos-delay="400"
          >
            <a href="/ordernow" className={styles.btn}>
              Order Now
            </a>
            <a href="/price" className={styles.price}>
              $16.00 | <span>Regular Price</span>
            </a>
          </div>
        </div>

        <div
          className={styles.heroImg}
          data-aos="zoom-in"
          data-aos-duration="1400"
        >
          <img src="/images/hero (1).png" alt="hero Image" />
        </div>
      </section>

      {/* Scroll Down */}
      <div
        className={styles.scroll}
        data-aos="zoom-out-down"
        data-aos-duration="1400"
        data-aos-delay="550"
      >
        <a href="#">
          <i>
            <CgScrollV />
          </i>
          Scroll Down
        </a>
      </div>
    </>
  );
};

export default Header;

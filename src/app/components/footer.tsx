import React from "react";
import styles from "../styles/footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className={styles.about}>
          <h3 className={styles.title}>About Us</h3>
          <p className={styles.text}>
            We Provide the finest coffee beans and desserts to satisfy your
            taste buds. Join us for an unforgettable experience.
          </p>
        </div>
        <div className={styles.links}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.footerLink}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3 className={styles.title}>Contact Us</h3>
          <p className={styles.text}>Email: support@coffee.com</p>
          <p className={styles.text}>Phone: +123 456 789</p>
          <p className={styles.text}>Address: 123 Coffee Street, Bean City</p>
        </div>
        <div className={styles.socials}>
          <h3 className={styles.title}>Follow Us</h3>
          <div className={styles.icons}>
            <a href="https://www.facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className={styles.text}>© 2025 Coffee Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

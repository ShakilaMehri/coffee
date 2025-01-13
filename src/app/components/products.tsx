"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/products.module.css";
import axios from "axios";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const itemPerSlide = 4;

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching products. ");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleLike = (productId: number) => {
    setLikedProducts((prev) => {
      if (!Array.isArray(prev)) return [productId];
      return prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
    });
  };

  const toggleCart = (product: Product) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === product.id)
        ? prevCart.filter((item) => item.id !== product.id)
        : [...prevCart, product]
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, products.length - itemPerSlide)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= products.length - itemPerSlide ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <div className={styles.loading}>Loading Products...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (products.length === 0) {
    return <div className={styles.noProducts}>No Products Available.</div>;
  }
  return (
    <section className={styles.products}>
      <h2 className={styles.title} data-aos="fade-up">
        Our Special Coffee
      </h2>
      <div className={styles.sliderContainer}>
        <button onClick={handlePrev} className={styles.arrow}>
          <BiChevronLeft />
        </button>
        <div className={styles.productGrid}>
          {products
            .slice(currentIndex, currentIndex + itemPerSlide)
            .map((product) => (
              <div
                key={product.id}
                className={styles.productCard}
                data-aos="zoom-in"
              >
                <div
                  className={styles.likeIcon}
                  onClick={() => toggleLike(product.id)}
                >
                  {Array.isArray(likedProducts) &&
                  likedProducts.includes(product.id) ? (
                    <FaHeart />
                  ) : (
                    <FiHeart />
                  )}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price}</p>
                <button
                  className={`${styles.cartButton} ${
                    cart.some((item) => item.id === product.id)
                      ? styles.inCart
                      : ""
                  }`}
                  onClick={() => toggleCart(product)}
                >
                  {cart.some((item) => item.id === product.id)
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

export default Products;

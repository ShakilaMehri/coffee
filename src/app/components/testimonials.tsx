import React from "react";
import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment: "The best coffee I've ever had",
      image: "/images/john.jfif",
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Great service and amazing flavors!",
      image: "/images/jane.jfif",
    },
    {
      id: 3,
      name: "Alice Brown",
      comment: "Highly recommended for all coffee lovers.",
      image: "/images/alice.jfif",
    },
  ];
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Our Happy Customers</h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((customer) => (
          <div key={customer.id} className={styles.testimonialCard}>
            <img
              src={customer.image}
              alt={customer.name}
              className={styles.image}
            />
            <h3 className={styles.name}>{customer.name}</h3>
            <p className={styles.comment}>{customer.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

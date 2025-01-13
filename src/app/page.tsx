import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import Products from "./components/products";
import Desserts from "./components/desserts";
import BestCoffee from "./components/bestCoffe";
import JoinIn from "./components/joinIn";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

const Page = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <Products/>
      <Desserts/>
      <BestCoffee/>
      <Testimonials/>
      <JoinIn/>
      <Footer/>
    </div>
  );
};

export default Page;

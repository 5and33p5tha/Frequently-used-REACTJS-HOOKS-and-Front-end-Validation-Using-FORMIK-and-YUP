import React from "react";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Recommendations from "../Components/Recommendations";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Products />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Home;

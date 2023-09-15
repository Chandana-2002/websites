import React from "react";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Stats />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;

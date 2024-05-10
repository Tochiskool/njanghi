import React from "react";
import Navbar from "../routes/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer/Footer";
import Hero from "../routes/Hero/Hero";

const GithubShow = () => {
  return (
    <>
      <Hero />
      <Wrapper>
        <Gallery />
      </Wrapper>
      <Footer />
    </>
  );
};

export default GithubShow;

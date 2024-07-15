import React from "react";
import HeroSection from "./components/HeroSection";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TenTwenty</title>
      </Helmet>
      <HeroSection />
      <section>
        <div className="secondary-section">
          <span className="section-header">Quality Products</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="card-carousel-container">
          <img src="/sec1.webp" className="left-card" />
          <img src="/sec2.webp" className="center-card" />
          <img src="/sec3.webp" className="right-card" />
        </div>

        <div className="card-carousel-description">
          <span>Client 1</span>
          <p>Dubai, United Arab Emirates</p>
        </div>
      </section>
    </>
  );
}

export default LandingPage;

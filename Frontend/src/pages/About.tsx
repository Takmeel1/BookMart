import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <div className="about-layout no-padding" style={{ background: 'transparent' }}>

      <div className="bookshelf left-shelf"></div>

      <div className="about-page no-box">
        {/* Hero Section */}
        <section className="hero-section no-box">
          <h1 className="hero-heading">
            Welcome to <br />
            <span className="brand-name">BOOKMART</span>
          </h1>
          <p className="hero-subtext">
            A modern eBook store app that lets you explore, buy, and read books anytime, anywhere. With a wide range of genres, smart search, and a smooth reading experience, it's your go-to platform for all things digital reading.
          </p>
          <button className="primary-button" onClick={handleSignIn}>
            Join the Marketplace
          </button>
        </section>

    

        {/* CTA */}
        <section className="cta-section no-box">
          <h2>Ready to Join the Book Revolution?</h2>
          <p>
            Whether you want to clean out your bookshelf or discover your next favorite read —
            BookMart is here for you.
          </p>
          <button className="primary-button" onClick={handleSignIn}>
            Create Your Free Account
          </button>
        </section>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} BookMart. All rights reserved.</p>
        </footer>
      </div>

      <div className="bookshelf right-shelf"></div>
    </div>
  );
}
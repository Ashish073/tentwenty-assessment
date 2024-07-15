import React, { useState, useEffect, useRef } from "react";
import { VscMenu } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

// Loader Component
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">Loading...</div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to control loader visibility
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Simulate loading time (e.g., fetch data or wait for resources to load)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div
          className={`navbar-items-container ${
            isLoading ? "loading" : "loaded"
          }`}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a href="#news">News</a>
                </li>
                <li className="nav-item">
                  <a href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a href="#team">Our Team</a>
                </li>
                <li className="nav-item">
                  <a href="#enquiry">Make Enquiry</a>
                </li>
              </ul>
              <button className="contact-button">
                Contact us &nbsp;&rarr;
              </button>
              <button className="menu-button" onClick={toggleMenu}>
                <VscMenu />
              </button>
            </>
          )}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              className="menu"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="menu-list">
                <li>
                  <a href="#about" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#news" onClick={toggleMenu}>
                    News
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={toggleMenu}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#team" onClick={toggleMenu}>
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#enquiry" onClick={toggleMenu}>
                    Make Enquiry
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

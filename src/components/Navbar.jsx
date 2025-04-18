import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger menu icons
import { motion } from "framer-motion";

const Navbar = ({ navList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="bg-secondary sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link
              to="hero" // Link to Hero section ID
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70} // Adjust offset based on navbar height
              className="text-highlight text-2xl font-bold cursor-pointer"
            >
              Sachin A S
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <motion.ul
              className="ml-10 flex items-baseline space-x-4"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {navList.map((item) => (
                <motion.li key={item} variants={navItemVariants}>
                  <Link
                    to={item.toLowerCase()} // Assumes section IDs match navList items in lowercase
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                    className="text-text-secondary hover:bg-accent hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                    activeClass="text-white bg-accent" // Active link styling
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navList.map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-70}
                className="text-text-secondary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
                activeClass="text-white bg-accent"
                onClick={toggleMenu} // Close menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;

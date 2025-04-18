import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // For scroll button

const Hero = ({ about }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-primary to-secondary px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm{" "}
          <span className="text-highlight">
            {about.fname} {about.lname}
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-text-secondary mb-6">
          A {about.occ}
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-text-secondary mb-8">
          {/* You can choose primary, secondary, or a mix */}
          {about.primary}
        </p>
        <Link
          to="about" // Link to the next section
          smooth={true}
          duration={500}
          offset={-70}
          className="inline-block bg-highlight text-white font-semibold px-8 py-3 rounded-md hover:bg-opacity-80 transition duration-300 cursor-pointer"
        >
          Learn More About Me
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

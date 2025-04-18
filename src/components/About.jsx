import React from "react";
import { motion } from "framer-motion";

const About = ({ about }) => {
  return (
    <section id="about" className="py-20 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-highlight"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-text-primary leading-relaxed"
        >
          {about.secondary}{" "}
          {/* Using the more detailed secondary description here */}
        </motion.p>
        {/* Add more details if needed, e.g., education summary */}
        {/*
         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="mt-8 text-left text-text-secondary bg-primary p-6 rounded-lg shadow-lg"
         >
            <h3 className="text-xl font-semibold text-text-primary mb-3">Education</h3>
            <p>B.Eng (CSE) - Vemana Institute of Technology (2020-2024) - 74.58%</p>
            <p>Languages: English, Hindi, Kannada</p>
            <p>Based in: Bengaluru, India</p>
         </motion.div>
         */}
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Skills = ({ skills }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger animation for each skill
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.2, // Added explicit duration for consistency
      },
    },
    hover: {
      // Added hover variants for scale and brightness
      scale: 1.1,
      backgroundColor: "rgba(0, 0, 0, 0.1)", // Slightly brighter on hover
      boxShadow: "0 0 8px rgba(40, 40, 40, 0.3)", // Add a subtle glow
      transition: {
        duration: 0.2, // Added duration for smooth hover transition
        type: "tween", // Use tween for a linear scale
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-highlight"
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills
            .filter((skill) => skill.add)
            .map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-secondary rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
                whileHover="hover" // Apply hover variants
              >
                {skill.image ? (
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 mb-3 object-contain rounded-full bg-white p-1"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "block";
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 mb-3 flex items-center justify-center bg-accent rounded-full text-2xl font-bold">
                    {skill.name.substring(0, 2)}
                  </div>
                )}
                <span className="hidden text-sm font-semibold mt-[-40px] mb-3">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-text-primary">
                  {skill.name}
                </span>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

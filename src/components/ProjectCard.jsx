import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import placeholderImage from "../assets/placeholder.png"; // Import placeholder

const ProjectCard = ({ project }) => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(1.2)", // Increased brightness
      transition: { duration: 0.2 },
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
    },
  };

  const handleError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  };

  return (
    <motion.div
      className="bg-primary rounded-lg overflow-hidden shadow-xl flex flex-col h-full"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        variants={cardHoverVariants}
        whileHover="hover"
        className="h-full flex flex-col"
      >
        <img
          src={project.image || placeholderImage}
          alt={`${project.name} screenshot`}
          className="w-full h-48 object-cover"
          onError={handleError}
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-highlight">
            {project.name}
          </h3>
          <p className="text-text-secondary text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {project.skills && project.skills.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-accent text-xs text-white px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex justify-start space-x-4 pt-4 border-t border-secondary">
            {project.githublink && (
              <a
                href={project.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-highlight transition duration-300 text-2xl"
                aria-label={`${project.name} GitHub Repository`}
              >
                <FaGithub />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-highlight transition duration-300 text-2xl"
                aria-label={`${project.name} Live Demo`}
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;

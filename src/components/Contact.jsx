import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaHackerrank,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { toast, Toaster } from "sonner"; // ADDED
import "sonner/dist/styles.css";

const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  HackerRank: FaHackerrank,
  tel: FaPhone,
  email: FaEnvelope, // Added email mapping
};

const Contact = ({ contact }) => {
  const getLinkHref = (platform, link) => {
    if (platform === "tel") return `tel:${link}`;
    if (platform === "email") return `mailto:${link}`;
    return link;
  };

  const handleCopy = (text, platformName) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success(`${platformName} link copied!`, {
          duration: 2000,
          className: "bg-green-500 text-white font-mono", // Custom class for success
          style: {
            backgroundColor: "black", // Tailwind green-500 equivalent, direct style
            color: "#fff",
            border: "none",
            fontFamily: "monospace",
          },
        });
      },
      () => {
        toast.error(`Failed to copy ${platformName} link.`, {
          duration: 2000,
          className: "bg-red-500 text-white font-mono", // Custom class for error
          style: {
            backgroundColor: "#ef4444", // Tailwind red-500 equivalent, direct style
            color: "#fff",
            fontFamily: "monospace",
          },
        });
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-highlight"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-text-secondary mb-10"
        >
          Feel free to reach out! I'm always open to discussing new projects,
          creative ideas, or opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center flex-wrap gap-6 md:gap-8" // Use flex-wrap
        >
          {contact.social
            .filter((item) => item.add)
            .map((item) => {
              const Icon = iconMap[item.platform];
              const href = getLinkHref(item.platform, item.link);
              return (
                <div
                  key={item.platform}
                  className="flex items-center group relative"
                >
                  <a
                    href={href}
                    target={
                      item.platform !== "tel" && item.platform !== "email"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.platform !== "tel" && item.platform !== "email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-text-secondary hover:text-highlight transition duration-300 text-3xl md:text-4xl transform group-hover:scale-90" // Added group-hover scale
                    aria-label={`My ${item.platform} profile`}
                    style={{
                      paddingRight: "2.5rem", // Make space for the copy icon.
                      transition: "transform 0.2s ease", // Add smooth transition
                    }}
                  >
                    {Icon ? <Icon /> : item.platform}{" "}
                    {/* Fallback to text if no icon */}
                  </a>
                  <motion.button // Replaced Button with standard HTML button and added motion
                    onClick={() => handleCopy(item.link, item.platform)}
                    className="absolute right-0  -translate-y-1/2 opacity-0 group-hover:opacity-100 text-text-secondary hover:text-highlight cursor-pointer transition-opacity" // Added cursor-pointer and transition
                    aria-label={`Copy ${item.platform} link`}
                    whileHover={{ scale: 1.2 }} // Add a slight scale on hover for better UX
                    whileTap={{ scale: 1.2 }}
                  >
                    <IoCopy className="h-6 w-6" />
                  </motion.button>
                </div>
              );
            })}
          {/* Manually add email if not in JSON */}
          {/* <a href="mailto:your.email@example.com" className="text-text-secondary hover:text-highlight ..."><FaEnvelope /></a> */}
        </motion.div>

        {/* Optional: Simple contact form placeholder */}
        {/*
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-lg mx-auto"
         >
            <p className="text-text-primary italic">Contact form coming soon...</p>
         </motion.div>
         */}
        <Toaster />
      </div>
    </section>
  );
};

export default Contact;

import React from "react";

const Footer = ({ about }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-center py-6 px-4">
      <p className="text-text-secondary text-sm">
        &copy; {currentYear} {about.fname} {about.lname}. All Rights Reserved.
      </p>
      {/* <p className="text-xs text-gray-500 mt-1">Built with React & Tailwind CSS</p> */}
    </footer>
  );
};

export default Footer;

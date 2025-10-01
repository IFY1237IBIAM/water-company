import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-2 px-4 mt-10 text-sm">
      <p>&copy; {new Date().getFullYear()} AquaMax. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

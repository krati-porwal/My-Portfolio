import React from "react";

export default function Footer() {
  return (
    <footer className="footer-custom py-3 bg-dark text-light text-center">
      <div>© {new Date().getFullYear()} Krati Porwal. All rights reserved.</div>
    </footer>
  );
}
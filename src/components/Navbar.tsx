import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">hiro-uuu Portfolio</Link>
      </div>
      <a href="" className="cta-btn">
        Resume
      </a>
    </div>
  );
};

export default Navbar;

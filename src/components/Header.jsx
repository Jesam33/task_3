import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="header bg-red-500 md:bg-transparent w-full flex justify-between items-center py-3">
      <div className="logo">
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="nav-items bg-red">
        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden px-3 py-2 text-[#333333] hover:bg-gray-200"
          onClick={toggleMobileMenu}
        >
          <DehazeIcon />
        </button>

        {/* Navigation Menu */}
        <nav
          className={` py-[55px] mt-[70px] md:mt-0  md:py-0 z-50 md:z-0 md:flex md:flex-wrap md:justify-end absolute md:relative top-0 right-0 h-auto bg-[#333333] md:bg-transparent transition-transform duration-300 transform md:translate-x-0 ${isMobileMenuOpen ? 'flex' : 'hidden'}`}
          style={{ minWidth: "200px", maxWidth: "300px" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 px-3 py-7 text-[#ffffff] hover:bg-gray-200 md:hidden"
            onClick={closeMobileMenu}
          >
            Close
          </button>

          <ul className="flex  flex-col md:flex-row justify-center md:justify-between gap-2 sm:gap-4 p-4">
            {/* Navigation Links */}
            <li className="px-1  sm:px-2 md:px-2">
              <NavLink
                exact
                to="/"
                className="font-sans text-white  md:text-[#333333] text-[12px] sm:text-[14px]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
                activeClassName="active"
                onClick={toggleMobileMenu} // Close menu on click
              >
                MAIN
              </NavLink>
            </li>

            {/* Other NavLink items... */}
            <li className="px-1 sm:px-2 md:px-2">
              <NavLink
                to="/gallery"
                className="font-sans text-white md:text-[#333333] text-[12px] sm:text-[14px]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
                activeClassName="active"
                onClick={toggleMobileMenu} // Close menu on click
              >
                GALLERY
              </NavLink>
            </li>

            <li className="px-1 sm:px-2 md:px-2">
              <NavLink
                to="/projects"
                className="font-sans text-white md:text-[#333333] text-[12px] sm:text-[14px]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
                activeClassName="active"
                onClick={toggleMobileMenu} // Close menu on click
              >
                PROJECTS
              </NavLink>
            </li>

            <li className="px-1 sm:px-2 md:px-2">
              <NavLink
                to="/certificate"
                className="font-sans text-white md:text-[#333333] text-[12px] sm:text-[14px]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
                activeClassName="active"
                onClick={toggleMobileMenu} // Close menu on click
              >
                CERTIFICATIONS
              </NavLink>
            </li>

            <li className="px-1 sm:px-2 md:px-2">
              <NavLink
                to="/contactPage"
                className="font-sans text-white md:text-[#333333] text-[12px] sm:text-[14px]"
                style={{
                  fontFamily: '"Roboto", sans-serif',
                  letterSpacing: "1px",
                  fontWeight: "400",
                }}
                activeClassName="active"
                onClick={toggleMobileMenu} // Close menu on click
              >
                CONTACTS
              </NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

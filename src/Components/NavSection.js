import React, { useEffect, useState, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const NavSection = () => {
  const [sticky, setSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  // All refs
  const navbar = useRef();
  const navbarOffset = useRef();

  // Mount the Event Listener on loading the site
  useEffect(() => {
    const handleScroll = () => {
      // Get the offset to the top
      const value = navbarOffset.current;

      // Set the boolean value
      setSticky(window.pageYOffset >= value);
    };

    window.addEventListener("scroll", handleScroll);

    // Set the height of the Navbar
    setNavHeight(navbar.current);

    // Remove the listener when cleaning up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={navbar} className='nav_conatiner content sticky'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
              Navbar
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
                <a className='nav-link' href='#'>
                  Shop
                </a>
                <a className='nav-link' href='#'>
                  About Product
                </a>
                <a className='nav-link' href='#'>
                  blog
                </a>
                <a className='nav-link' href='#'>
                  contact
                </a>
                <a className='nav-link' href='#'>
                  Pricing
                </a>
              </div>
              <div className='register_section'>
                <button className='signin_btn'>Login</button>
                <button className='signup_btn'>SignUp</button>
              </div>
              <div className='link_container'>
                <AiOutlineShoppingCart />
                <AiFillTwitterCircle />
                <AiFillFacebook />
                <AiFillLinkedin />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavSection;

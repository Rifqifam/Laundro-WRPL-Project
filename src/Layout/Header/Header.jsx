import { NavLink } from "react-router-dom";
import "./Header.scss";
import React, { useState } from "react";

import Logo from "../../Assets/Logo/laundro_logo.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='header_wrapper'>
      <div className='header_wrapper_leftcol'>
        <img src={Logo} alt='' />
        <h2>Laundro</h2>
      </div>
      <div className='header_wrapper_rightcol'>
        <ul className='header_wrapper_rightcol_nav'>
          <li className='header_wrapper_rightcol_nav_home'>
            <NavLink to='/' className='anchor' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li className='header_wrapper_rightcol_nav_category'>
            <NavLink to='/category' className='anchor' activeClassName='active'>
              Category
            </NavLink>
          </li>
          <li className='header_wrapper_rightcol_nav_order'>
            <NavLink to='/orders' className='anchor' activeClassName='active'>
              Orders
            </NavLink>
          </li>
        </ul>
        <div className='header_wrapper_rightcol_account' onClick={handleToggle}>
          <div className='header_wrapper_rightcol_account_pic'>
            <img src='' alt='' />
          </div>
          <h2>Admin 1</h2>
        </div>
        <div
          className={`my-account-Dropdown_wrapper ${isOpen ? "active" : ""}`}
        >
          <ul>
            <li>
              <NavLink
                to='useraccount'
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink to='#'>Sign Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

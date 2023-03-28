import { NavLink } from "react-router-dom";
import "./Header.scss";
import React, { useState } from "react";

import Logo from "../../Assets/Logo/laundro_logo.webp";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const [isOpenMobile, setIsOpenMobile] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const handleToggleMobile = () => {
      setIsOpenMobile(!isOpenMobile);
   };
   return (
      <>
         <div className='header_wrapper'>
            <div className='header_wrapper_leftcol'>
               <img src={Logo} alt='' />
               <h2>Laundro</h2>
            </div>

            <div className='header_wrapper_rightcol'>
               <ul className='header_wrapper_rightcol_nav'>
                  <li className='header_wrapper_rightcol_nav_home'>
                     <NavLink
                        to='/'
                        className='anchor'
                        activeClassName='active'
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className='header_wrapper_rightcol_nav_category'>
                     <NavLink
                        to='/category'
                        className='anchor'
                        activeClassName='active'
                     >
                        Category
                     </NavLink>
                  </li>
                  <li className='header_wrapper_rightcol_nav_order'>
                     <NavLink
                        to='/orders'
                        className='anchor'
                        activeClassName='active'
                     >
                        Orders
                     </NavLink>
                  </li>
               </ul>

               <div
                  className='header_wrapper_rightcol_account'
                  onClick={handleToggle}
               >
                  <div className='header_wrapper_rightcol_account_pic'>
                     <img src='' alt='' />
                  </div>
                  <h2>Admin 1</h2>
               </div>

               <div
                  className={`my-account-Dropdown_wrapper ${
                     isOpen ? "active" : ""
                  }`}
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

               <div className='header_wrapper_rightcol_nav-mobile'>
                  <div
                     className={`header_wrapper_rightcol_nav-mobile_toggle ${
                        isOpenMobile ? "active" : ""
                     }`}
                     onClick={handleToggleMobile}
                  >
                     <svg
                        width='45px'
                        height='45px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           fill-rule='evenodd'
                           clip-rule='evenodd'
                           d='M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z'
                           fill='#000000'
                        />
                     </svg>
                  </div>
               </div>
            </div>
         </div>
         <div
            className={`header_wrapper_rightcol_nav-mobile_menu ${
               isOpenMobile ? "active" : ""
            }`}
         >
            <ul className=''>
               <li className=''>
                  <NavLink to='/' className='anchor' activeClassName='active'>
                     Home
                  </NavLink>
               </li>
               <li className=''>
                  <NavLink
                     to='/category'
                     className='anchor'
                     activeClassName='active'
                  >
                     Category
                  </NavLink>
               </li>
               <li className=''>
                  <NavLink
                     to='/orders'
                     className='anchor'
                     activeClassName='active'
                  >
                     Orders
                  </NavLink>
               </li>

               <li className=''>
                  <NavLink to='#' className='anchor' activeClassName='active'>
                     My Account
                  </NavLink>
               </li>

               <li className=''>
                  <NavLink to='#' className='anchor' activeClassName='active'>
                     Log Out
                  </NavLink>
               </li>
            </ul>
         </div>
      </>
   );
};

export default Header;

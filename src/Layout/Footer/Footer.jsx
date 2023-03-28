import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

import LogoWhiteText from "../../Assets/Logo/logoWhiteText.svg";
import Instagram from "../../Assets/Logo/instagram.svg";
import Linkedin from "../../Assets/Logo/linkedin.svg";

const Footer = () => {
   return (
      <>
         <div className='footer_wrapper'>
            <div className='footer_wrapper_leftcol'>
               <img src={LogoWhiteText} alt='' />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  vulputate imperdiet vestibulum. Quisque ac ipsum sit amet
                  tortor volutpat laoreet. Donec eu aliquam dolor.{" "}
               </p>
            </div>
            <div className='footer_wrapper_midcol'>
               <h2>Menu</h2>
               <ul className=''>
                  <li className=''>
                     <NavLink to='/' className='' activeClassName='active'>
                        Home
                     </NavLink>
                  </li>
                  <li className=''>
                     <NavLink
                        to='/category'
                        className=''
                        activeClassName='active'
                     >
                        Category
                     </NavLink>
                  </li>
                  <li className=''>
                     <NavLink
                        to='/orders'
                        className=''
                        activeClassName='active'
                     >
                        Orders
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div className='footer_wrapper_rightcol'>
               <h2>Social Media</h2>
               <ul className=''>
                  <li className=''>
                     <NavLink to=''>
                        <img src={Instagram} alt='' />
                     </NavLink>
                  </li>
                  <li className=''>
                     <NavLink to=''>
                        <img src={Linkedin} alt='' />
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};

export default Footer;

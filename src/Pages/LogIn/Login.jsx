import React from "react";
import { NavLink } from "react-router-dom";

import "./Login.scss";

const Login = () => {
   return (
      <>
         <div className='login_wrapper'>
            <div className='login_wrapper_form'>
               <h1>Log In</h1>
               <form action=''>
                  <div className='field'>
                     <label htmlFor=''>Username</label>
                     <input type='text' name='' id='' />
                  </div>
                  <div className='field'>
                     <label htmlFor=''>Password</label>
                     <input type='text' name='' id='' />
                  </div>
                  <button className='Submit' type='submit'>
                     Log In
                  </button>
                  <NavLink className='NoAccount' to=''>
                     Doesn't Have an Account?
                  </NavLink>
               </form>
            </div>
         </div>
      </>
   );
};

export default Login;

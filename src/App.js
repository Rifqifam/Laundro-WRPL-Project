import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Category from "./Pages/Category-Page/Category";
import Orders from "./Pages/Orders/Order";
import SingleLaundry from "./Pages/Single-Laundry/SingleLaundry";
import UserAcc from "./Pages/User-Account/UserAccount";
import ConfirmPurchase from "./Pages/Confirm-Purchase/ConfirmPurchase";

// Categories
import OneDay from "./Pages/Categories/OnedayService/OnedayService";
import OneCustomer from "./Pages/Categories/OneCustomerOneMachine/OneCustomerOneMachine";
import Steam from "./Pages/Categories/Steam/Steam";
import ThreeHours from "./Pages/Categories/ThreeHoursExpress/ThreeHoursExpress";
import Under2Kg from "./Pages/Categories/Under2Kg/Under2Kg";
import WashOnly from "./Pages/Categories/WashOnly/WashOnly";

function App() {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/category' element={<Category />} />
               <Route path='/orders' element={<Orders />} />
               <Route path='/useraccount' element={<UserAcc />} />
               <Route path='/category/oneday-service' element={<OneDay />} />
               <Route path='/category/one-customer' element={<OneCustomer />} />
               <Route path='/category/steam' element={<Steam />} />
               <Route path='/category/three-hours' element={<ThreeHours />} />
               <Route path='/category/under-2-kg' element={<Under2Kg />} />
               <Route path='/category/washonly' element={<WashOnly />} />
               <Route path='/confirmpurchase' element={<ConfirmPurchase />} />

               {/* Single Laundry */}
               <Route
                  path='/category/:catId/:laundryId'
                  element={<SingleLaundry />}
               />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;

import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import Category from "./Pages/Category-Page/Category";
import Orders from "./Pages/Orders/Order";
import SingleLaundry from "./Pages/Single-Laundry/SingleLaundry";
import UserAcc from "./Pages/User-Account/UserAccount";

function App() {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route path='/' element={<Homepage />} />
               <Route path='/category' element={<Category />} />
               <Route path='/orders' element={<Orders />} />
               <Route path='/singlelaundry' element={<SingleLaundry />} />
               <Route path='/useraccount' element={<UserAcc />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
}

export default App;

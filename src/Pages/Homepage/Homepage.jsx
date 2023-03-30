import React from "react";
import "./Homepage.scss";

import ImgBanner from "../../Assets/Images/homepage_banner.webp";
import LaundryBlock from "../../Components/Laundry-Block/LaundryBlock";
import LaundryBlockImg from "../../Assets/Images/LaundryBlockImg.webp";
import LogoWhite from "../../Assets/Logo/Logo-White.webp";

const Homepage = () => {
  return (
    <div className="homepage_wrapper">
      <div className="homepage_wrapper_banner">
        <overlay className="homepage_wrapper_banner_overlay"></overlay>
        <img src={ImgBanner} alt="" />
        <div className="homepage_wrapper_banner_text">
          <p>Edu Kusuma Laundry</p>
        </div>
      </div>

      <div className="homepage_wrapper_featured">
        <div className="homepage_wrapper_featured_headerwrapper">
          <h2>Featured Laundries</h2>
        </div>
        <div className="homepage_wrapper_featured_item_wrapper">
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
        </div>
      </div>

      <div className="homepage_wrapper_about">
        <div className="homepage_wrapper_about_leftcol">
          <img src={LogoWhite} alt="" />
          <p>Laundro</p>
        </div>

        <div className="homepage_wrapper_about_rightcol">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="homepage_wrapper_find">
        <div className="homepage_wrapper_find_headerwrapper">
          <h2>Find Laundries</h2>
          <div className="homepage_wrapper_find_headerwrapper_filter">
            <div className="select_filter">
              <select name="City" id="select_filter_city">
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>

            <div className="select_filter">
              <select
                name="District"
                id="select_filter_district"
                placeholder="District"
              >
                <option value="Sleman">Sleman</option>
                <option value="Yogyakarta">Yogyakarta</option>
                <option value="GunungKidul">Gunung Kidul</option>
                <option value="Bantul">Bantul</option>
              </select>
            </div>

            <div className="select_filter">
              <select name="Price" id="select_filter_price" placeholder="Price">
                <option value="">Rp 3.000 / kg - Rp 5.000 / kg</option>
                <option value="">Rp 5.000 / kg - Rp 10.000 / kg</option>
                <option value="">Rp 10.000 / kg - Rp 15.000 / kg</option>
              </select>
            </div>
          </div>
        </div>
        <div className="homepage_wrapper_find_item_wrapper">
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
          <LaundryBlock
            image={LaundryBlockImg}
            name="Edu Kusuma Laundry"
            price="1500"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

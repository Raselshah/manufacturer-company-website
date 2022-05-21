import React from "react";
import Footer from "../../Shared/Footer/Footer";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import OurProducts from "./OurProducts/OurProducts";
import UpcommingProducts from "./UpcommingProducts/UpcommingProducts";

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <OurProducts />
      <UpcommingProducts />
      <Footer />
    </div>
  );
};

export default HomePage;

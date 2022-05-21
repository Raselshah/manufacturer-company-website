import React from "react";
import Footer from "../../Shared/Footer/Footer";
import HomePageBanner from "./HomePageBanner/HomePageBanner";
import OurProducts from "./OurProducts/OurProducts";
import UpcommingProducts from "./UpcommingProducts/UpcommingProducts";
import WorkingProcess from "./WorkingProcess/WorkingProcess";

const HomePage = () => {
  return (
    <div>
      <HomePageBanner />
      <OurProducts />
      <UpcommingProducts />
      <WorkingProcess />
      <Footer />
    </div>
  );
};

export default HomePage;

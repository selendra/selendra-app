import React from "react";
import Navbar from "../components/navbar";
import Networks from "../components/networks";
import Dapp from "../components/dapp";
import Ecosystem from "../components/ecosystem";
import Footer from "../components/footer";
import Commingsoon from "../components/comming-soon";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="background-img"></div>
      <div className="background-img1"></div>
      <div className="glassss">
        <div
          // className="px-4 md:container md:mx-auto md:px-28 sm:px-6 lg:px-28"
          className="lg:container lg:mx-auto xl:px-44 px-0 py-8"
        >
          <Networks />
          <Dapp />
          <Ecosystem />
          <Commingsoon />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

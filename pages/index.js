import React from "react";
import Navbar from "../components/navbar";
import Networks from "../components/networks";
import Wallet from "../components/wallet";
import Ecosystem from "../components/ecosystem";
import Footer from "../components/footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="background-img"></div>
      <div className="background-img1"></div>
      <div className="glassss">
        <div
          // className="px-4 md:container md:mx-auto md:px-28 sm:px-6 lg:px-28"
          className="lg:container lg:mx-auto lg:px-44 px-4 py-8"
        >
          <Networks />
          <Wallet />
          <Ecosystem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

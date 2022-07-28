import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NetworkProduct from "../components/networkProduct";
import Partner from "../components/partner";
import WalletProduct from "../components/walletProduct";

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
          <NetworkProduct />
          <WalletProduct />
          <Partner />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

import React from "react";
import Ecosystem from "../components/ecosystem";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NetworkProduct from "../components/networkProduct";
import AppAndWallet from "../components/app-and-wallet";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="background-img"></div>
      <div className="background-img1"></div>
      <div className="glassss">
        <div className="lg:container lg:mx-auto lg:px-44 px-4 py-8">
          <NetworkProduct />
          <AppAndWallet />
          <Ecosystem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

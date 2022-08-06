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
          <center>
            <p className="lg:px-0 px-2 md:text-xl md:text-md text-xl mt-4 lg:w-2/3 mb-32">
            The Selendra Testnet blockchain application development platform is for students, schools, universities, community networks, and independent developers. You are invited to collaborate with us as we share blockchain knowledge and development strategies through an easy to learn and use development environment.
            </p>
          </center>
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

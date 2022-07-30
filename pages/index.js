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
            <p
              className="lg:px-0 px-2 md:text-2xl md:text-md text-xl mt-4 lg:w-2/3 mb-9"
              // className="lg:px-0 px-2 md:text-2xl py-8 md:text-md text-xl md:w-2/3 text-gray-700 text-center mb-20"
            >
              We are also working with students, universities, community
              developers to share blockchain education and develop more useful
              use-cases for general users and the whole ecosystem.
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

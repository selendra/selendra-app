import React from "react";
import dapps from "../data/dapps.json";

const wallet = () => {
  return (
    <div className="lg:h-[75vh] lg:flex lg:place-content-center lg:flex-col space-y-24 mt-16 sm:mt-0 mb-9">
      {/* <center>
        <h1 className="md:mt-12 mt-18 md:mb-0  md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center">
          Apps
        </h1>
        <p className="lg:px-0 px-2 md:text-2xl md:text-md text-xl py-4">
          Digital wallets and tools to navigate Selendra growing ecosystem of
          services
        </p>
      </center> */}
      <center>
        <h1 className="md:mt-28 mt-16 sm:mb-0 md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r  from-pink-600 to-purple-700 py-4 text-center">
          Apps and DApps
        </h1>
        <p className="lg:px-0 px-2 md:text-2xl md:text-md text-xl mt-4">
           Digital wallets and tools for navigating the growing ecosystem of Selendra (SEL) products and services
        </p>
      </center>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 px-2 lg:px-0 gap-2 mt-16">
        {dapps.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div className="bg-blue-500 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-400 h-full ">
                <div className="card backdrop-blur bg-white bg-opacity-80 h-full ">
                  <figure className="px-10 pt-10">
                    <img
                      src={res.image}
                      alt="Shoes"
                      className="rounded-xl h-20"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">
                      {res.name}
                    </h2>
                    <p className="text-center text-xl text-gray-600">
                      {res.des}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default wallet;

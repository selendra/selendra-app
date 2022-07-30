import React from "react";
import commingsoon from "../data/comming-soon.json";

const Commingsoon = () => {
  return (
    <div className="lg:h-[75vh] lg:flex lg:place-content-center lg:flex-col space-y-24 mb-16 mt-16 sm:mt-0">
      <center>
        <h1 className="md:mt-28 mt-16 sm:mb-0 md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r  from-pink-500 to-purple-600 py-4 text-center">
          Coming Soon!
        </h1>
        <p className="lg:px-0 px-2 md:text-2xl md:text-md text-xl mt-4">
          Stablecoins and Decentralized Finance are also coming on Selendra
          Blockchain
        </p>
      </center>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-2 mt-16 px-2 lg:px-0 pb-10 place-items-stretch place-content-stretch">
        {commingsoon.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div className="bg-blue-500 rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full ">
                <div className="card bg-white h-full bg-opacity-90 backdrop-blur">
                  <figure className="px-10 pt-10">
                    <img
                      src={res.image}
                      alt="Shoes"
                      className="rounded-xl h-16"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">
                      {res.name}
                    </h2>
                    {/* <p className="text-center text-xl text-gray-600">
                      {res.des}
                    </p> */}
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

export default Commingsoon;

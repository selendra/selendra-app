import React from "react";
import networks from "../data/networks.json";

const network = () => {
  return (
    <div className="lg:h-[75vh] lg:flex lg:place-content-center lg:flex-col sm:mt-12 ">
      <center>
        <h1
          className="md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
          // className="md:text-7xl text-4xl font-extrabold "
        >
          Networks
        </h1>
        <p
          className="lg:px-0 px-2 md:text-2xl md:text-md text-xl mt-4 lg:w-2/3"
          // className="lg:px-0 px-2  md:text-4xl py-8 sm:text-md text-xl md:w-2/3 text-gray-600"
        >
          Selendra Mainnet and Testnet is now lived. More useful and interesting features will be added as we progress. Feel free to look around!
        </p>
        {/* <p className="lg:px-0 px-10  md:text-2xl text-md">
          Stablecoins and Decentralized Finance are also coming on <br />
          Selendra Blockchain.
        </p> */}
      </center>

      <div className="grid md:grid-cols-2 gap-2 mt-16 px-2 lg:px-0 pb-10 place-items-stretch place-content-stretch">
        {networks.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div
                className={
                  res.name == "Testnet"
                    ? "p-0.5  pb-2 bg-gradient-to-r rounded-2xl from-pink-500 to-purple-600 text-center h-full"
                    : "p-0.5  pb-2 bg-gradient-to-r rounded-2xl from-cyan-500 to-blue-500 text-center h-full"
                }
                // className="bg-blue-500 rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-pink-500 to-purple-600 h-full "
              >
                <div className="card bg-white h-full bg-opacity-90 backdrop-blur">
                  <div className="card-body p-16">
                    <figure className="px-10">
                      <img
                        src={res.image}
                        alt="Shoes"
                        className="rounded-x h-20"
                      />
                    </figure>
                    <h2
                      className={
                        res.name == "Testnet"
                          ? "font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center"
                          : "font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center"
                      }
                    >
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

export default network;

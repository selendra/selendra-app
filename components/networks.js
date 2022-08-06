import React from "react";
import networks from "../data/networks.json";

const network = () => {
  return (
    <div className="lg:h-[65vh] lg:flex lg:place-content-center lg:flex-col sm:mt-12 ">
      <center>
        <h1
          className="md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
          // className="md:text-7xl text-4xl font-extrabold "
        >
          Networks
        </h1>
        <p className="lg:px-0 px-2 md:text-2xl md:text-md text-xl mt-4 lg:w-2/3">
          Selendra Mainnet and Testnet are now live and growing, with many more great features to come. 
        </p>
        <p className="lg:px-0 px-2 md:text-xl md:text-md text-xl mt-4 lg:w-2/3">
          Browse around and join our community as we push forward developing new <br /> and innovative blockchain applications designed that benefit us all.
        </p>
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

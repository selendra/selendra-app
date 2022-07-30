import React from "react";
import networks from "../data/networks.json";

const network = () => {
  return (
    <div className="lg:h-[75vh] lg:flex lg:place-content-center lg:flex-col mt-16">
      <center>
        <h1
          className="md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center"
          // className="md:text-7xl text-4xl font-extrabold "
        >
          Networks
        </h1>
        <p className="lg:px-0 px-10  md:text-4xl py-8 text-md w-2/3 text-gray-600">
          Selendra Mainnet and Testnet is now lived. More interesting features of the mainchain will be added as we progress. Find out what's in store below. 
        </p>         
      </center>

      <div className="grid md:grid-cols-2 gap-2 mt-16 px-2 lg:px-0 pb-10 place-items-stretch place-content-stretch">
        {networks.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div
                className={
                  res.name == "Testnet"
                    ? "p-0.5  pb-2 bg-gradient-to-r rounded-2xl from-pink-500 to-purple-600 text-center"
                    : "p-0.5  pb-2 bg-gradient-to-r rounded-2xl from-cyan-500 to-blue-500 text-center"
                }
                // className="bg-blue-500 rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-pink-500 to-purple-600 h-full "
              >
                <div className="card bg-base-100 h-full bg-opacity-90 backdrop-blur">
                  <div className="card-body">
                    <h2
                      className={
                        res.name == "Testnet"
                          ? "font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center"
                          : "font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-center"
                      }
                    >
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
      <center>
        <p className="lg:px-0 px-10  md:text-2xl py-8 text-md w-2/3 text-gray-700 text-center">
          We are also working with students, universities, community developers to
          share blockchain education and develop more useful use-cases for general users and the whole ecosystem.
        </p>
      </center>
    </div>
  );
};

export default network;

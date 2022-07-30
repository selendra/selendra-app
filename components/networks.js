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
        <p className="lg:px-0 px-10  md:text-2xl py-8 text-md w-2/3 text-gray-600">
          The Selendra Mainnet and Testnet is now lived. Find out more for
          yourself below. More features, tools and useful applications are
          undevelopment and will add here the network progresses.
        </p>
      </center>
      {/* <div className="lg:grid lg:grid-cols-2 gap-2 px-2 lg:px-0 py-10">
        {networks.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div className="card  lg:w-full backdrop-blur bg-base-100  mt-5 md:mt-5 bg-opacity-70 ">
                <figure className="px-10 pt-10">
                  <img
                    src={res.image}
                    alt="Shoes"
                    className="rounded-xl w-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-2xl font-bold text-center">{res.name}</h2>
                  <p className="text-center text-xl text-gray-500">{res.des}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div> */}
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
    </div>
  );
};

export default network;

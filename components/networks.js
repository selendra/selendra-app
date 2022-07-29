import React from "react";
import networks from "../data/networks.json";

const network = () => {
  return (
    <div className="">
      <center>
        <h1 className="md:text-7xl text-4xl font-extrabold">Networks</h1>
        <p className="lg:px-0 px-10 mt-6 md:text-3xl text-md">
          The Selendra Mainnet and Testnet is now lived. Find out more for yourself below. 
          More features, tools and useful applications are undevelopment and will add here the network progresses.
        </p>
      </center>
      <div className="lg:grid lg:grid-cols-1 gap-7  px-2 lg:px-48 py-10">
        {networks.map((res, index) => {
          return (
            <a key={index} href={res.link} rel="noreferrer" target="_blank">
              <div className="card lg:card-side backdrop-blur bg-base-100 mt-9 md:mt-5 bg-opacity-70">
                <figure className="px-5 py-3">
                  <img className="w-40" src={res.image} alt="Movie" />
                </figure>
                <div className="card-body leading-3">
                  <h2 className="font-bold text-3xl md:text-4xl py-4 text-center lg:text-left">
                    {res.name}
                  </h2>
                  <p className="text-xl text-gray-500 text-center lg:text-left">
                    {res.des}
                  </p>
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

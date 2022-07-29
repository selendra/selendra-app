import React from "react";
import networkProduct from "../data/networkProduct.json";

const NetworkProduct = () => {
  return (
    <div>
      <center>
        <h1 className="md:text-7xl text-4xl font-extrabold">Networks</h1>
        <p className="lg:px-0 px-10 mt-6 md:text-3xl text-md">
          We are backing up every block across the Polkadot and Kusama Networks
          as public good for the benefit of the ecosystem
        </p>
      </center>
      <div className="lg:grid lg:grid-cols-1 gap-7  px-2 lg:px-48 py-10">
        {networkProduct.map((res, index) => {
          return (
            <a key={index} href={res.link} rel="noreferrer" target="_blank">
              <div className="card lg:card-side backdrop-blur bg-base-100 mt-9 md:mt-5 bg-opacity-70">
                <figure className="px-5 py-3">
                  <img className="w-40" src={res.image} alt="Movie" />
                </figure>
                <div className="card-body leading-3">
                  <h2 className="font-bold text-3xl md:text-6xl py-4 text-center lg:text-left">
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

export default NetworkProduct;

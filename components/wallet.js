import React from "react";
import dapps from "../data/dapps.json";

const wallet = () => {
  return (
    <div className="lg:h-[82vh] lg:flex lg:place-content-center lg:flex-col space-y-24">
      <center>
        <h1 className="md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 text-center">
          Apps
        </h1>
        <p className="lg:px-0 px-10 mt-6 md:text-2xl py-8 text-md w-2/3">
          Tools for navigating Selendra Networks.
        </p>
      </center>

      <div className="grid xl:grid-cols-3 sm:grid-cols-2 px-2 lg:px-0 gap-2 mt-16">
        {dapps.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div className="card backdrop-blur bg-base-100  mt-5 md:mt-1 bg-opacity-70 ">
                <figure className="px-10 pt-10">
                  <img
                    src={res.image}
                    alt="Shoes"
                    className="rounded-xl h-20"
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
      </div>
    </div>
  );
};

export default wallet;

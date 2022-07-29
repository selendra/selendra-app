import React from "react";
import networks from "../data/networks.json";

const network = () => {
  return (
    <div>
      <center>
        <h1 className="md:text-7xl text-4xl font-extrabold">Networks</h1>
        <p className="lg:px-0 px-10 mt-6 md:text-3xl text-md">
          The Selendra Mainnet and Testnet is now lived. Find out more for
          yourself below. More features, tools and useful applications are
          undevelopment and will add here the network progresses.
        </p>
      </center>
      <div className="lg:grid lg:grid-cols-2 gap-7  px-2 lg:px-0 py-10">
        {networks.map((res, index) => {
          return (
            // <a key={index} href={res.link} rel="noreferrer" target="_blank">
            //   <div className="card lg:card-side backdrop-blur bg-base-100 mt-9 md:mt-5 bg-opacity-70">
            //     <figure className="px-5 py-3">
            //       <img className="w-40" src={res.image} alt="Movie" />
            //     </figure>
            //     <div className="card-body leading-3">
            //       <h2 className="font-bold text-3xl md:text-4xl py-4 text-center lg:text-left">
            //         {res.name}
            //       </h2>
            //       <p className="text-xl text-gray-500 text-center lg:text-left">
            //         {res.des}
            //       </p>
            //     </div>
            //   </div>
            // </a>
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
      </div>
    </div>
  );
};

export default network;

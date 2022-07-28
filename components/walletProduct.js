import React from "react";
import dataTwo from "../data/dataTwo.json";

const WalletProduct = () => {
  return (
    <div className="mt-16 px-2 lg:px-48  pb-10">
      <center>
        <h1 className="text-4xl font-extrabold">Apps and Wallets</h1>
        <p className="lg:px-6 px-10 mt-6">
          We are backing up every block across the Polkadot and Kusama Networks
          as public good for the benefit of the ecosystem
        </p>
      </center>

      <div className="lg:grid lg:grid-cols-2 gap-7 mt-16">
        {dataTwo.map((res, index) => {
          return (
            <div key={index}>
              <div className="card  md:w-96 backdrop-blur bg-base-100  mt-5 sm:mt-0 bg-opacity-70 ">
                <figure className="px-10 pt-10">
                  <img
                    src={res.image}
                    alt="Shoes"
                    className="rounded-xl w-40"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{res.name}</h2>
                  <p>{res.des}</p>
                  <div className="card-actions">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="btn bg-info border-none btn-block"
                      href={res.link}
                    >
                      <button>Read More</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WalletProduct;

import React from "react";
import dataOne from "../data/dataOne.json";

const NetworkProduct = () => {
  return (
    // className="px-2 md:px-48 py-10"
    <div>
      <center>
        <h1 className="text-4xl font-extrabold">Selendra Networks</h1>
        <p className="lg:px-56 px-10 mt-6">
          We are backing up every block across the Polkadot and Kusama Networks
          as public good for the benefit of the ecosystem
        </p>
      </center>
      <div className="lg:grid lg:grid-cols-2 gap-7 mt-16">
        {dataOne.map((res, index) => {
          return (
            // <div key={index}>
            //   <div className="card backdrop-blur bg-base-100 bg-opacity-70  mt-5 sm:mt-0">
            //     <figure className="px-10 pt-10">
            //       <img
            //         src={res.image}
            //         alt="Shoes"
            //         className="rounded-xl w-40"
            //       />
            //     </figure>
            //     <div className="card-body">
            //       <h2 className="card-title">{res.name}</h2>
            //       <p>{res.des}</p>
            //       <div className="card-actions">
            // <a
            //   rel="noreferrer"
            //   target="_blank"
            //   className="btn bg-info border-none btn-block"
            //   href={res.link}
            // >
            //   <button>Read More</button>
            // </a>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div className="card sm:card-side backdrop-blur bg-base-100 mt-5 lg:mt-0 bg-opacity-70">
              <figure className="px-5 py-4">
                <img className="w-40" src={res.image} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{res.name}</h2>
                <p>{res.des}</p>
                <div className="card-actions justify-end">
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
          );
        })}
      </div>
    </div>
  );
};

export default NetworkProduct;

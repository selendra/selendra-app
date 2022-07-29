import React from "react";
import ecosystem from "../data/ecosystem.json";

const Ecosystem = () => {
  return (
    <div>
      <div>
        <center>
          <h1 className="sm:text-7xl text-4xl font-extrabold lg:px-0 px-10 mt-16">
            Ecosystem
          </h1>
          <p className="lg:px-0 px-10 mt-6 md:text-3xl text-md">
            We are backing up every block across the Polkadot and Kusama
            Networks as public good for the benefit of the ecosystem
          </p>
        </center>

        <div className="grid md:grid-cols-2 md gap-2 mt-16 px-2 lg:px-48  pb-10">
          {ecosystem.map((res, index) => {
            return (
              <a
                key={res.index}
                rel="noreferrer"
                target="_blank"
                href={res.link}
              >
                <div className="card  lg:w-96 backdrop-blur bg-base-100 mt-5 sm:mt-5 bg-opacity-70 ">
                  <figure className="px-10 pt-10">
                    <img
                      src={res.image}
                      alt="Shoes"
                      className="rounded-xl w-40"
                    />
                  </figure>
                  <div className="card-body">
                    {/* <h2 className="text-2xl font-bold text-center">
                      {res.name}
                    </h2> */}
                    <p className="text-center text-xl text-gray-500">
                      {res.des}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;

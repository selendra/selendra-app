import React from "react";
import ecosystem from "../data/ecosystem.json";

const Ecosystem = () => {
  return (
    <div className="lg:h-[75vh] lg:flex lg:place-content-center lg:flex-col space-y-24 mt-16 sm:mt-0">
      <center>
        <h1 className="md:mt-28 mt-16 sm:mb-0 md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 py-4 text-center">
          Ecosystem
        </h1>
        <p className="lg:px-0 px-2  md:text-2xl md:text-md text-xl mt-4">
          Community DApplications and Tools
        </p>
      </center>
      {/* <center>
        <h1 className="md:mt-28 mt-16 sm:mb-0 md:text-7xl font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-600 py-4 text-center">
          Ecosystem
        </h1>
        <p className="lg:px-0 px-10 md:text-2xl py-8 text-md w-2/3">
          <b>Applications</b> and <b>Tools</b> developed by developers from the community and partners. We look forward to welcome more useful and user-friendly applications onto Selendra Network. If you have ideas, please reach out. 
        </p>
      </center> */}

      <div className="grid md:grid-cols-2 gap-2 mt-16 px-2 lg:px-0  place-items-stretch place-content-stretch">
        {ecosystem.map((res, index) => {
          return (
            <a key={res.index} rel="noreferrer" target="_blank" href={res.link}>
              <div className="bg-blue-500 rounded-2xl p-0.5  pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 h-full ">
                <div className="card bg-white h-full bg-opacity-90 backdrop-blur">
                  <figure className="px-10 pt-10">
                    <img
                      src={res.image}
                      alt="Shoes"
                      className="rounded-xl h-16"
                    />
                  </figure>
                  <div className="card-body">
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

export default Ecosystem;

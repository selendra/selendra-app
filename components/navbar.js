import React from "react";
import Image from "next/image";
import ToggleThemes from "./toggleTheme";

const Navbar = () => {
  return (
    <div>
      <div className="sm:hidden block">
        <div className="sm:container sm:mx-auto sm:px-44">
          <div className="navbar bg-base-100">
            <div className="navbar-start"></div>
            <div className="navbar-center">
              <a className="btn btn-ghost normal-case text-xl">
                <div className="rounded-full ">
                  <Image
                    width={100}
                    height={100}
                    className="w-8"
                    src="/images/Selendralogo.png"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div className="navbar-end flex items-center gap-3">
              <a
                href="https://github.com/selendra "
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  width={30}
                  height={30}
                  src="/images/github-svgrepo-com.svg"
                  alt=""
                />
              </a>
              <ToggleThemes />
            </div>
          </div>
        </div>
      </div>
      {/* ==============Desktop show ============== */}
      <div className="hidden sm:block">
        <div className="navbar bg-base-100">
          <div className="sm:container sm:mx-auto xl:px-44 px-0 ">
            <div className="flex-1 hidden sm:block">
              <div className="rounded-full ">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  className="w-8"
                  src="/images/Selendralogo.png"
                />
              </div>
            </div>
            <div className="flex-none">
              <div className="hidden sm:block">
                <ul className=" menu menu-horizontal p-0">
                  <li>
                    <a
                      href="https://github.com/selendra "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        alt=""
                        width={30}
                        height={30}
                        src="/images/github-svgrepo-com.svg"
                      />
                    </a>
                  </li>
                </ul>
                <ToggleThemes />
              </div>
              <div className="sm:hidden block navbar-end">
                <div className="dropdown">
                  <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex="0"
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        href="https://github.com/selendra "
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

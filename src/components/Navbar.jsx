import React from "react";

import chedLogo from "../assets/Commission_on_Higher_Education_(CHEd).svg.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 gap-2">
        <img src={chedLogo} className="h-10 w-10" />
        <h1 className="text-xl font-bold">OCDRA</h1>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/#home">Home</a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li> */}

          <li>
            <a href="/#news">News</a>
          </li>

          {/* <li>
            <a href="/#members">Members</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

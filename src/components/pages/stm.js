import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Stm() {
  return (
    <div className="h-auto bg-black">
      <Header />
      <ResultList />
    </div>
  );
}

function Header() {
  return (
    <div className="container mx-auto h-1/2	p-5 max-w-5xl">
      <h2 className="text-white text-3xl font-bold mt-4">Dictionary</h2>
      <p className="text-white text-lg">
        Definitions from&nbsp;
        <a
          href="https://indigitous.org/about-us/"
          target="_blank"
          className="text-white text-lg underline"
        >
          Indigitous
        </a>
      </p>
      <div className="text-white flex mt-5">
        <div className="text-white flex border-2 rounded">
          <input
            className="text-white px-4 py-2 md:w-80"
            type="text"
            placeholder="Search for a word"
          />
          <div></div>
          <button className="text-gray border-l px-4 py-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ResultList() {
  return (
    <div className="container mx-auto h-1/2	p-5 max-w-5xl">
      <div>
        <h3 className="text-white text-5xl font-bold mt-4">
          spir·it·u·al to·pog·ra·phy map
        </h3>
        <h3 className="text-white text-lg mt-4">
          /ˈspiriCH(o͞o)əl təˈpäɡrəfē map/
        </h3>
        <h3 className="text-gray italic text-lg mt-4">noun</h3>
        <h3 className="text-white text-lg mt-4">
          1. relating to or affecting the human spirit or soul as opposed to
          material or physical things.&#10;"I'm responsible for his spiritual
          welfare"
        </h3>
        <h3 className="text-white text-lg mt-4">
          2. relating to religion or religious belief.&#10;"the tribe's
          spiritual leader"
        </h3>
        <h3 className="text-black text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </h3>
      </div>
    </div>
  );
}

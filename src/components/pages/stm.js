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
      <div className="max-w-7xl">
        <div className="text-white flex mt-5">
          <div className="text-white flex border-2 rounded">
            <input
              className="text-white px-4 py-2 md:w-80"
              type="text"
              placeholder="Search for a word"
            />
            <div></div>
            <button className="text-gray border-l px-4 py-2 bg-black-500 hover:bg-black-400 text-white font-bold border-b-4 border-black hover:border-black-500 rounded">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray" />
            </button>
          </div>
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
        <h3 className="text-gray italic text-lg">noun</h3>
        <h3 className="text-white text-lg">
          1. if we mapped all the churches in a city, would we be able to spot
          spiritual dead zones?
        </h3>
        <h3 className="text-gray-400 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Find and extract Church Data for your City."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            data scraping
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            javascript
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            python
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            etc
          </button>
        </h3>
        <br />
        <h3 className="text-white text-lg">
          2. if we remixed metadata data over that, would we be able to derive
          more insights?
        </h3>
        <h3 className="text-gray-400 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Gather metadata for your City and remix the
          data in a map."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            demographic
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            poverty
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            crime
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            education
          </button>
        </h3>
        <br />
        <h3 className="text-white text-lg">
          3. how could those insights help inform a "Theology of Place" that
          informs churches/ministries as they serve the cities God has planted
          them in?
        </h3>
        <h3 className="text-gray-400 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Explore the Theology of Place."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            mapbox
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            leaflet
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            google maps
          </button>
          <button class="bg-transparent hover:bg-gray-600 text-white font-bold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-full">
            tables
          </button>
        </h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

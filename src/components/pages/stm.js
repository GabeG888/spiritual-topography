import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import earth from "./images/earth.jpg";

export default function Stm() {
  return <Content />;
}

function Content() {
  return (
    <div className="flex flex-col items-center justify-center p-28">
      <div class="p-28 min-h-4/5 flex flex-row items-center justify-center bg-white space-x-44">
        <div class="h-48 w-48 relative">
          <div class="text-white text-2xl opacity-100 absolute inset-0 bg-gray-500 rounded-lg shadow-2xl flex items-center justify-center">
            Spiritual
          </div>
          <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-125 transition duration-300">
            <div class="h-full w-full bg-gray-700 rounded-lg shadow-2xl">
              <div className="text-white text-8xl flex items-center justify-center h-48">
                S
              </div>
            </div>
          </div>
        </div>
        <div class="h-48 w-48 relative">
          <div class="text-white text-2xl opacity-100 absolute inset-0 bg-gray-500 rounded-lg shadow-2xl flex items-center justify-center">
            Topography
          </div>
          <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-125 transition duration-300">
            <div class="h-full w-full bg-gray-700 rounded-lg shadow-2xl">
              <div className="text-white text-8xl flex items-center justify-center h-48">
                T
              </div>
            </div>
          </div>
        </div>
        <div class="h-48 w-48 relative">
          <div class="text-white text-2xl opacity-100 absolute inset-0 bg-gray-500 rounded-lg shadow-2xl flex items-center justify-center">
            Map
          </div>
          <div class="absolute inset-0 transform hover:rotate-90 hover:translate-x-full hover:scale-125 transition duration-300">
            <div class="h-full w-full bg-gray-700 rounded-lg shadow-2xl">
              <div className="text-white text-8xl flex items-center justify-center h-48">
                M
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 w-3/5">
        <div>
          <div className="text-3xl">
            <span className="bg-yellow-300 tracking-normal font-bold">
              Remixing data to establish a Theology of Place{" "}
            </span>
            <span className="bg-pink-300 tracking-normal font-bold">
              to equip urban ministers to strategically engage with cultural and
              unreached people groups{" "}
            </span>
            <span className="bg-blue-300 tracking-normal font-bold">
              in order to promote Church Growth and Evangelism.
            </span>
          </div>
        </div>
      </div>
      <div className="description">
        <div class="p-28 flex flex-row items-center justify-center bg-white space-x-44">
          <div class="h-24 w-48 relative transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1">
            <div class="absolute inset-0 flex rounded-full">
              <div class="h-full w-full bg-yellow-300 rounded-lg shadow-lg">
                <div className="text-white text-4xl flex items-center justify-center h-24">
                  Vision
                </div>
              </div>
            </div>
          </div>
          <div class="h-24 w-48 relative transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1">
            <div class="absolute inset-0 flex rounded-full">
              <div class="h-full w-full bg-pink-300 rounded-lg shadow-lg">
                <div className="text-white text-4xl flex items-center justify-center h-24">
                  Description
                </div>
              </div>
            </div>
          </div>
          <div class="h-24 w-48 relative transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 col-start-2 row-span-1">
            <div class="absolute inset-0 flex rounded-full">
              <div class="h-full w-full bg-blue-300 rounded-lg shadow-lg">
                <div className="text-white text-4xl flex items-center justify-center h-24">
                  Outcome
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Content() {
//   return (
//     <div className="flex justify-center items-center h-screen p-44">
//       <div>
//         <p className="text-4xl">
//           <span className="bg-yellow-200 tracking-normal font-bold">
//             Remixing data to establish a Theology of Place
//           </span>{" "}
//           <span className="bg-pink-300 tracking-normal font-bold">
//             to equip urban ministers to strategically engage with cultural and
//             unreached people groups
//           </span>{" "}
//           <span className="bg-blue-300 tracking-normal font-bold">
//             in order to promote Church Growth and Evangelism.
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// function Content() {
//   return (
//     <div className="container mx-auto h-1/2	p-5 max-w-5xl">
//       <div>
//         <h3 className="text-white  text-5xl font-bold mt-4">
//           spir·it·u·al to·pog·ra·phy map
//         </h3>
//         <h3 className="text-white  text-lg mt-4">
//           /ˈspiriCH(o͞o)əl təˈpäɡrəfē map/
//         </h3>
//         <h3 className="text-white  italic text-lg">noun</h3>
//         <br />
//       </div>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div className="container mx-auto h-1/2	p-5 max-w-5xl">
//       <h2 className="text-white  text-3xl font-bold mt-4">Dictionary</h2>
//       <p className="text-white   text-lg">
//         Definitions from&nbsp;
//         <a
//           href="https://indigitous.org/about-us/"
//           target="_blank"
//           className="text-white  text-lg underline"
//         >
//           Indigitous
//         </a>
//       </p>
//       <div className="max-w-7xl">
//         <div className="text-white   flex mt-5">
//           <div className="text-white   flex border-2 rounded">
//             <input
//               className="text-white  px-4 py-2 md:w-80"
//               type="text"
//               placeholder="Search for a word"
//             />
//             <div></div>
//             <button className="text-gray border-l px-4 py-2 bg-white-500 hover:bg-white-400 text-white font-bold border-b-4 border-white hover:border-white-500 rounded">
//               <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// dictionary style
{
  /* <h3 className="text-white  text-lg">
          1. if we mapped all the churches in a city, would we be able to spot
          spiritual dead zones?
        </h3>
        <h3 className="text-zinc-500 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Find and extract Church Data for your City."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            data scraping
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            javascript
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            python
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            etc
          </button>
        </h3>
        <br />
        <br />
        <h3 className="text-white   text-lg">
          2. if we remixed metadata data over that, would we be able to derive
          more insights?
        </h3>
        <h3 className="text-zinc-500 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Gather metadata for your City and remix the
          data in a map."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            demographic
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            poverty
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            crime
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            education
          </button>
        </h3>
        <br />
        <br />
        <h3 className="text-white   text-lg">
          3. how could those insights help inform a "Theology of Place" that
          informs churches/ministries as they serve the cities God has planted
          them in?
        </h3>
        <h3 className="text-zinc-500 text-lg">
          &emsp;&emsp;&emsp;&emsp;"Explore the Theology of Place."
        </h3>
        <br />
        <h3 className="text-green-600 text-lg flex space-x-5">
          &emsp;&emsp;&emsp;&emsp;&emsp;Similar:&emsp;&emsp;
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            mapbox
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            leaflet
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            google maps
          </button>
          <button class="bg-transparent hover:bg-zinc-500 text-white  font-bold hover:text-white   py-2 px-4 border border-zinc-500 hover:border-transparent rounded-full">
            tables
          </button>
        </h3>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */
}

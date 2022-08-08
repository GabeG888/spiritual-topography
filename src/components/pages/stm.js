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
    <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:p-20 lg:flex lg:flex-col lg:items-center lg:justify-center lg:p-28">
      <div class="md:col-start-1 md:col-span-2 md:row-start-1 space-x-22 lg:p-28 lg:min-h-4/5 lg:flex lg:flex-row lg:items-center lg:justify-center bg-white lg:space-x-44">
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
      <div className="flex justify-center md:col-start-2 md:col-span-1 md:row-start-1 p-8 lg:h-1/3 lg:w-3/5">
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
      <div className="flex justify-center items-center content-center md:ml-14 md:col-start-3 md:col-span-1 md:row-start-1">
        <br className="lg:hidden" />
        <br className="lg:hidden" />
        <div class="lg:p-28 lg:flex lg:flex-row lg:items-center lg:justify-center lg:bg-white lg:space-x-44">
          <div class="hover:shadow-yellow-300 h-24 w-48 relative transform rounded lg:overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 lg:col-start-2 lg:row-span-1">
            <div class="absolute inset-0 flex rounded-full">
              <div class="h-full w-full bg-yellow-300 rounded-lg shadow-lg">
                <div className="text-white text-4xl flex items-center justify-center h-24">
                  Vision
                </div>
              </div>
            </div>
          </div>
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <div class="hover:shadow-pink-300 h-24 w-48 relative transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 lg:col-start-2 lg:row-span-1">
            <div class="absolute inset-0 flex rounded-full">
              <div class="h-full w-full bg-pink-300 rounded-lg shadow-lg">
                <div className="text-white text-4xl flex items-center justify-center h-24">
                  Description
                </div>
              </div>
            </div>
          </div>
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <br className="lg:hidden" />
          <div class="hover:shadow-blue-300 h-24 w-48 relative transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 duration-300 lg:col-start-2 lg:row-span-1">
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

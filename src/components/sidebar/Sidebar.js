import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <>
      {showSidebar ? (
        <button
          className="p-4 flex text-4xl text-black items-center cursor-pointer fixed right-0 top-28 m-5 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FontAwesomeIcon icon={faAnglesRight} className="text-black" />
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="bg-white p-4 rounded-full shadow-2xl shadow-white fixed z-30 flex items-center cursor-pointer right-0 top-28 m-5 text-black text-4xl"
        >
          <FontAwesomeIcon icon={faAnglesLeft} className="text-black" />
        </button>
      )}

      <div
        className={`top-28 right-0 w-fit bg-white bg-opacity-80 p-8 text-black fixed h-auto z-40 ease-in-out duration-300 rounded-lg shadow-2xl ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <h3 className="text-4xl font-bold text-black">Options</h3>
        <br />
        <p className="text-xl text-black">
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Churches:
            <input
              type="checkbox"
              id="churches-toggle"
              className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
            />
            <span
              className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-700 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"
            ></span>
          </label>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Population:
            <input
              type="checkbox"
              id="population-toggle"
              className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
            />
            <span
              className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-700 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"
            ></span>
          </label>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Clustering:
            <input
              type="checkbox"
              id="clustering-toggle"
              className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
            />
            <span
              className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-700 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"
            ></span>
          </label>
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <input
            type="search"
            id="search"
            className="block p-4 pl-10 w-52 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search by keyword..."
            required
          />
        </p>
      </div>
    </>
  );
};

export default Sidebar;

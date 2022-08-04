import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return(
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-0 top-0 m-5 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          &gt;
        </button>
      ) : (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer right-0 top-0 m-5 text-white text-4xl">
        &lt;
        </button>
      )}

      <div className={`top-20 right-0 w-auto bg-gray-500/75  p-10 text-white fixed h-auto z-40 ease-in-out duration-300 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"}`}>
        <h3 className="text-4xl font-semibold text-white">Options</h3><br />
        <p className="text-xl text-white">
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Churches: 
            <input type="checkbox" id="churches-toggle" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"></span>
          </label>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Population: 
            <input type="checkbox" id="population-toggle" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"></span>
          </label>
          <label className="relative flex justify-between items-center group p-2 text-xl">
            Clustering: 
            <input type="checkbox" id="clustering-toggle" className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md" />
            <span className="w-11 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out 
            peer-checked:bg-blue-600 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300
            peer-checked:after:translate-x-4 group-hover:after:translate-x-1"></span>
          </label>
        </p>
      </div>
    </>
  )
}

export default Sidebar;

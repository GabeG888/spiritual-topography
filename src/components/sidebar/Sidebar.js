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
        <h3 className="text-4xl font-semibold text-white">Sidebar</h3>
        <p className="text-xl text-white">
          Item 1 <br />
          Item 2 <br />
          Item 3
        </p>
      </div>
    </>
  )
}

export default Sidebar;

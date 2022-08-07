import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Github() {
  return (
    <>
      <h1 className="text-white">Github</h1>
      <div className="flex justify-center items-center h-screen">
        <FontAwesomeIcon
          icon={faGithub}
          className="text-gray text-9xl shadow-xl hover:shadow-2xl rounded-full font-bold transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        />
      </div>
      {/* <iframe
        src="../../README.md"
        height="200"
        width="300"
        title="Iframe Example"
      ></iframe> */}
    </>
  );
}

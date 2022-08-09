import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Github() {
  return (
    <>
      <div className="flex justify-center items-center h-screen shadow-xl hover:shadow-2xl hover:shadow-cyan-300">
        <a
          href="https://github.com/GabeG888/spiritual-topography.git"
          target="_blank"
          className="rounded-lg"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="p-8 animate-bounce text-gray text-9xl shadow-xl hover:shadow-2xl rounded-full font-bold transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300"
          />
        </a>
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

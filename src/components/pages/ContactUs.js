import React, { useState } from "react";
import "../../App.css";

export default function ContactUs() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 bg-black">
      <br />
      <br />
      <div className="text-8xl text-white">
        Let's Chat
        <span className="text-green-600 hover:text-green-400 inline-block">
          .
        </span>
      </div>
      <br />
      <form class="rounded-full bg-black flex flex-col justify-center items-center">
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-white">
            What's your name?
          </label>
          <input
            class="rounded-full items-center	bg-green-700 hover:bg-green-400 text-black text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Full name"
          />
        </div>
        <br />
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-white">
            Your email?
          </label>
          <input
            class="rounded-full items-center	bg-green-700 hover:bg-green-400 text-black text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Email Address"
            n
          />
        </div>
        <br />
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-white">
            We'd Love to Hear From You!
          </label>
          <input
            class="rounded-full items-center	bg-green-700 hover:bg-green-400 text-black text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Message"
          />
        </div>
        <br />
        <br />
        <div className=" flex flex-col justify-center items-center ">
          <button
            class="text-5xl flex flex-col justify-center items-center flex-shrink-0 bg-green-600 hover:bg-green-400 border-4 border-green-600 hover:border-green-400  text-white py-1 px-2 rounded-full"
            type="button"
          >
            Send
          </button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "../../App.css";

export default function ContactUs() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 bg-white">
      <br />
      <br />
      <div className="text-8xl text-black">
        Let's Chat
        <span className="text-zinc-500 hover:text-zinc-400 inline-block">
          .
        </span>
      </div>
      <br />
      <form class="rounded-full bg-white flex flex-col justify-center items-center">
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-black">
            What's your name?
          </label>
          <input
            class="rounded-full items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Full name"
          />
        </div>
        <br />
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-black">
            Your email?
          </label>
          <input
            class="rounded-full items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Email Address"
            n
          />
        </div>
        <br />
        <div class="py-2 p-8 text-4xl">
          <label className="flex flex-col justify-center items-center text-black">
            We'd Love to Hear From You!
          </label>
          <input
            class="rounded-full items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Message"
          />
        </div>
        <br />
        <br />
        <div className=" flex flex-col justify-center items-center ">
          <button
            class="text-5xl flex flex-col justify-center items-center flex-shrink-0 bg-zinc-500 hover:bg-zinc-400 border-4 border-zinc-500 hover:border-zinc-400  text-white py-1 px-2 rounded-full"
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

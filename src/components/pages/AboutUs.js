import React from "react";
import matt from "./images/matt.jpg";
import alex from "./images/alex.jpg";
import gabbie from "./images/gabbie.jpg";
import gabe from "./images/gabe.jpg";
import grace from "./images/grace.jpg";
import frank from "./images/frank.jpg";
import "./styles.css";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-2 gap-0 grid-rows-3 p-12 md:gap-0 md:p-12 lg:grid-cols-4 lg:gap-8 lg:grid-rows-3 lg:p-12 ">
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-2 lg:row-span-1">
        <img class="w-full" src={matt} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Matthew Chan</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">Mentor</div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            Born in Foggy SF, raised in sunny HK
            <br />
            let me tell you a story about how my life got flipped-turned upside
            down.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #friedriceforlife
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #digitalmissionary
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #bibleinnovation
          </span>
        </div>
      </div>
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-3 lg:row-span-1">
        <img class="w-full" src={alex} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Alex Shih</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">Mentor</div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            Alex Shih is a product leader at Slack, working to improve
            collaboration in our new normal. He’s passionate about serving the
            developing world through increasing access to information and
            opportunity, and thereby the Gospel.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #beginningsomethingnew
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #gokaribu.com
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #int'ldevelopmententhusiast
          </span>
        </div>
      </div>
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-2 lg:row-span-1">
        <img class="w-full" src={gabbie} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Gabbie Liu</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">
            UX Designer/Graphic Designer
          </div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #God
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #is a
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #designer.
          </span>
        </div>
      </div>
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-3 lg:row-span-1">
        <img class="w-full" src={gabe} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Gabe Gordon</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">
            Developer
          </div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            Christian programmer and hacker in high-school.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #cs
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #cybersec
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #ctf
          </span>
        </div>
      </div>
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-2 lg:row-span-1">
        <img class="w-full" src={grace} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Grace Zhao</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">
            Developer
          </div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            Advance global missions through research and analytics.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #digitalmission
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #data
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #sharklover
          </span>
        </div>
      </div>
      <div class="hover:z-50 transform rounded overflow-hidden shadow-xl hover:shadow-2xl transition ease-in-outbg-white hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300 duration-300 lg:col-start-3 lg:row-span-1">
        <img class="w-full" src={frank} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">Frank Liu</div>
          <div class="font-bold text-xl mb-2 italic text-zinc-500">
            Developer Team Lead
          </div>
          <p class="text-gray-700 xs:text-sm md:text-lg">
            CS @ UC Berkeley and excited to work on meaningful projects with
            technology.
            <br />
            Feel free to reach out!
            <br />
            frank.j.liu (at) berkeley.edu
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 inline-block align-bottom self-end">
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #tennis
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #worship
          </span>
          <span class="inline-block  bg-gray-200 rounded-full px-3 py-1 xs:text-sm md:text-base font-semibold text-gray-700 mr-2 mb-2">
            #berkeleyanova
          </span>
        </div>
      </div>
    </div>
  );
}

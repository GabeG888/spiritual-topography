import React, { useState } from "react";
import "../../App.css";

// export default function ContactUs() {
//   return (
//     <>
//       <h1 className="contact-us">Contact Us</h1>
//     </>
//   );
// }

const FORM_ENDPOINT = "";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-3 bg-black">
      <h2 className="bg-blue-100 text-8xl text-white p-4 col-start-1 col-end-3 row-start-1 row-end-2">
        Let's Chat.
      </h2>
      <form class="bg-red-100 col-start-2 col-end-5 row-start-1 row-end-2">
        <div class="border-b border-teal-500 py-2 p-8 text-4xl">
          <label className="text-white">What's your name?</label>
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Full name"
          />
        </div>
        <div class="border-b border-teal-500 py-2 p-8 text-4xl">
          <label className="text-white">Your email?</label>
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Full name"
          />
        </div>
        <div class="border-b border-teal-500 py-2 p-8 text-4xl">
          <label className="text-white">We'd Love to Hear From You</label>
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder=""
            aria-label="Full name"
          />
        </div>
      </form>
    </div>
  );

  // return (
  //   <div
  //     className="bg-black h-screen flex flex-col
  //     items-center justify-center "
  //   >
  //     <div className="container object-fill hover:transition-transform mb-3 pt-0">
  //       <h3 className="text-4xl text-center text-white text-s">
  //         We'd Love to Hear From You
  //       </h3>
  //     </div>
  //     <form
  //       className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  //       action={FORM_ENDPOINT}
  //       onSubmit={handleSubmit}
  //       method="POST"
  //       target="_blank"
  //     >
  //       <div className="text-xl ">What's your name?</div>
  //       <div className="mb-3 pt-0">
  //         <input
  //           type="text"
  //           placeholder="Your name"
  //           name="name"
  //           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  //           required
  //         />
  //       </div>
  //       <div className="text-xl ">Your email?</div>
  //       <div className="mb-3 pt-0">
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           name="email"
  //           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  //           required
  //         />
  //       </div>
  //       <div className="text-xl ">Let's chat.</div>
  //       <div className="mb-3 pt-0">
  //         <textarea
  //           placeholder="Your message"
  //           name="message"
  //           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
  //           required
  //         />
  //       </div>
  //       <div className="mb-3 pt-0">
  //         <button
  //           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  //           type="submit"
  //         >
  //           Send a message
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default ContactUs;

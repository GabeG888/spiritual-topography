import React, { useState } from "react";

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from "@formspree/react";

function ContactUs() {
  const [state, handleSubmit] = useForm("mnqrayrz");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 bg-white">
      <br />
      <br />
      <div className="text-8xl text-black">
        Let's Chat
        <span className="text-zinc-500 hover:text-zinc-400 inline-block">
          .
        </span>
        <br />
      </div>
      <form
        className="rounded bg-white flex flex-col justify-center items-center"
        id="fs-frm"
        name="simple-contact-form"
        accept-charset="utf-8"
        action="https://formspree.io/f/mnqrayrz"
        method="post"
      >
        <fieldset id="fs-frm-inputs" className="py-2 p-8 text-4xl">
          <label
            for="full-name"
            className="flex flex-col justify-center items-center text-black"
          >
            What's your name?
          </label>
          <input
            class="rounded items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />
          <br />
          <br />
          <label
            for="email-address"
            className="flex flex-col justify-center items-center text-black"
          >
            Your email?
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
            class="rounded items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
          />
          <br />
          <br />
          <label
            for="message"
            className="flex flex-col justify-center items-center text-black"
          >
            We'd Love to Hear From You!
          </label>
          <textarea
            rows="3"
            name="message"
            id="message"
            placeholder="How can I get involved?"
            required=""
            class="rounded items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
            class="rounded items-center	bg-zinc-500 hover:bg-zinc-400 text-white text-lg border-none w-full mr-10 py-1 px-2 leading-tight focus:outline-none"
          />
        </fieldset>
        <br />
        <br />
        <input
          type="submit"
          class="text-4xl flex flex-col justify-center items-center flex-shrink-0 bg-zinc-500 hover:bg-zinc-400 border-4 border-zinc-500 hover:border-zinc-400  text-white py-1 px-2 rounded"
          value="Submit"
        />
      </form>
    </div>
  );
}
function ContactForm() {
  return <ContactUs />;
}
export default ContactForm;

"use client";
import React from "react";
const ContactUs = () => {
  return (
    <section className="relative mx-auto flex flex-col md:flex-row lg:flex-row justify-center items-center bg-white py-5 md:py-20 lg:py-40 gap-5 md:gap-10 lg:gap-20">
      <div className="w-[300px] h-[600px] bg-[#e88e95] absolute opacity-80 bottom-[200px]  top-0 left-0 blur-[100px]"></div>
      <div className="px-5 w-full md:w-1/3 lg:1/3">
        <div className="relative px-5 md:px-10 lg:px-10 py-5 md:py-20 lg:py-20">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-[700]">Get in touch with us.</h1>
          <h1 className="text-3xl font-[700] text-slate-800 mt-5">
            Feel free to say hello with us!
          </h1>
          <p className="my-5 text-base text-slate-500 font-[500]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation together.
          </p>
          <div className="flex gap-2 shadow-lg bg-white p-5 rounded-lg mt-5 w-full md:w-1/2 lg:w-1/2">
            <div className="flex items-center justify-center w-12 h-12 rounded bg-slate-100 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#1F2937"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#1F2937"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-base text-slate-500 font-[500]">Mail us at</p>
              <p className="mt-1 text-base text-primary font-[500]">
                morfitter@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 w-full md:w-1/3 lg:1/3">
        <div className="relative rounded-lg bg-white px-8 py-20 shadow-lg">
          <form>
            <ContactInputBox type="text" name="name" placeholder="Your Name" />
            <ContactInputBox
              type="text"
              name="email"
              placeholder="Your Email"
            />
            <ContactInputBox
              type="text"
              name="phone"
              placeholder="Your Phone"
            />
            <ContactTextArea
              row="6"
              placeholder="Your Message"
              name="details"
              defaultValue=""
            />
            <div>
              <button
                type="submit"
                className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-5">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-5">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
        />
      </div>
    </>
  );
};

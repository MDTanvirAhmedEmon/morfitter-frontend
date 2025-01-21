import React from "react";

const ContactUs = () => {
  return (
    <section className="mx-auto flex justify-center items-center bg-white py-20">
      <div className="px-5 w-1/2">
        <div className="relative rounded-lg bg-white p-8 shadow-lg">
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

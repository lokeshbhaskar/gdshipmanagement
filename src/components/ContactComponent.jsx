import { forwardRef } from "react";
import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

const ContactComponent = forwardRef((props,ref) => {
  return (
    <div ref={ref} className="w-full min-h-screen px-6 py-16">

      {/* BIG FULL-WIDTH HEADING */}
      <h1 className="text-[55px] md:text-[140px] xl:text-[250px]  tracking-widest text-center text-[#0B1E3F] opacity-20 select-none">
        CONTACT
      </h1>

      {/* MAIN CONTENT */}
      <div className="mt-5 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* LEFT SIDE INFO */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 space-y-8 px-2">
          <h2 className="text-3xl font-semibold text-[#0B1E3F]">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            We’re here to assist you with any marine or offshore inquiries.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <HiPhone className="text-[#0B1E3F] text-3xl" />
              <div>
                <h3 className="font-semibold text-lg text-[#0B1E3F]">Phone</h3>
                <p className="text-gray-600">+91 9467842122</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiMail className="text-[#0B1E3F] text-3xl" />
              <div>
                <h3 className="font-semibold text-lg text-[#0B1E3F]">Email</h3>
                <p className="text-gray-600">support@gdshipservices.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HiLocationMarker className="text-[#0B1E3F] text-3xl" />
              <div>
                <h3 className="font-semibold text-lg text-[#0B1E3F]">Location</h3>
                <p className="text-gray-600">Gd Ship, Mathura, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl p-8">
            <form className="space-y-6">

              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E3F]"
                  placeholder="Your Name"
                />
              </div>

              

              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E3F]"
                  placeholder="Your Email"
                />
              </div>

        <div>
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E3F]"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#0B1E3F]"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="
    w-full 
    bg-linear-to-r from-[#0B1E3F] to-[#103163]
    text-white 
    py-3 
    rounded-full 
    text-lg 
    font-semibold 
    shadow-md 
    transition-all 
    duration-300 
    hover:shadow-xl 
    hover:scale-[1.03] 
    hover:from-[#103163] 
    hover:to-[#0B1E3F]
  "
              >
                Send Message
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
});

export default ContactComponent;

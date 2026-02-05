import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";

const ContactComponent = forwardRef((props, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully 🚢✨");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to send message. Please try again ❌");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div ref={ref} className="w-full min-h-screen px-6 py-16">
      <h1 className="text-[55px] md:text-[140px] xl:text-[250px] tracking-widest text-center text-[#031535]  opacity-90 select-none">
        CONTACT
      </h1>

      <div className="mt-5 w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">

        {/* LEFT */}
        <div className="md:w-1/2 w-full space-y-8">
          <h2 className="text-3xl font-semibold text-[#0B1E3F]">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <HiPhone className="text-3xl text-[#0B1E3F]" />
              <p>+91 9467842122</p>
            </div>
            <div className="flex items-center gap-4">
              <HiMail className="text-3xl text-[#0B1E3F]" />
              <p>info@gdshipmanagement.in</p>
            </div>
            <div className="flex items-center gap-4">
              <HiLocationMarker className="text-3xl text-[#0B1E3F]" />
              <p>SF 2A MOTI MANJIL RADHIKA VIHAR MATHURA UTTAR PRADESH 281001 INDIA</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 border rounded-xl h-32 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0B1E3F] text-white py-3 rounded-full text-lg font-semibold transition hover:scale-[1.03]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactComponent;

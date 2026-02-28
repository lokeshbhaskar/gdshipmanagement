import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { toast } from "react-toastify";

const ContactComponent = forwardRef((_, ref) => {
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
    <section ref={ref} className="relative w-full overflow-hidden bg-[#061B33] px-4 py-16 sm:px-6 md:px-10 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(43,118,196,0.25),transparent_34%),radial-gradient(circle_at_84%_14%,rgba(227,177,96,0.18),transparent_32%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#BFD5EA]">
            Contact Desk
          </p>
          <h1 className="font-serif text-4xl font-semibold text-[#ECF4FC] sm:text-5xl md:text-6xl">
            Let’s Discuss Your Maritime Requirements
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#C8DCEE] sm:text-base">
            Share your requirement and our team will respond with a practical
            support path for commercial, technical, crew, or consultancy needs.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-[#4A6F93] bg-[#0B2C4D]/80 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-[#E4EFF9] sm:text-3xl">
              Get in Touch
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#BFD3E6] sm:text-base">
              We are available to assist with vessel operations, marine support,
              and business coordination.
            </p>

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4 rounded-xl border border-[#56799D] bg-[#0D3257]/85 p-4">
                <HiPhone className="mt-0.5 text-2xl text-[#E3B160]" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#AFC7DE]">
                    Phone
                  </p>
                  <a
                    href="tel:+919467842122"
                    className="text-sm font-semibold text-[#E7F1FB] hover:text-[#ffd28b]"
                  >
                    +91 9467842122
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#56799D] bg-[#0D3257]/85 p-4">
                <HiMail className="mt-0.5 text-2xl text-[#E3B160]" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#AFC7DE]">
                    Email
                  </p>
                  <a
                    href="mailto:info@gdshipmanagement.in"
                    className="text-sm font-semibold break-all text-[#E7F1FB] hover:text-[#ffd28b]"
                  >
                    info@gdshipmanagement.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-[#56799D] bg-[#0D3257]/85 p-4">
                <HiLocationMarker className="mt-0.5 text-2xl text-[#E3B160]" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#AFC7DE]">
                    Address
                  </p>
                  <p className="text-sm leading-relaxed text-[#E7F1FB]">
                    SF 2A MOTI MANJIL RADHIKA VIHAR MATHURA UTTAR PRADESH 281001
                    INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-[#4A6F93] bg-[#f5f9fd] p-5 shadow-[0_22px_60px_rgba(2,10,22,0.45)] sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#163654]">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-[#bfd2e4] bg-white px-4 py-3 text-sm text-[#193450] outline-none transition focus:border-[#2f6da3] focus:ring-2 focus:ring-[#2f6da3]/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#163654]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-xl border border-[#bfd2e4] bg-white px-4 py-3 text-sm text-[#193450] outline-none transition focus:border-[#2f6da3] focus:ring-2 focus:ring-[#2f6da3]/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#163654]">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full rounded-xl border border-[#bfd2e4] bg-white px-4 py-3 text-sm text-[#193450] outline-none transition focus:border-[#2f6da3] focus:ring-2 focus:ring-[#2f6da3]/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#163654]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="h-36 w-full resize-none rounded-xl border border-[#bfd2e4] bg-white px-4 py-3 text-sm text-[#193450] outline-none transition focus:border-[#2f6da3] focus:ring-2 focus:ring-[#2f6da3]/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#0B2F52] py-3 text-base font-semibold tracking-wide text-white transition hover:bg-[#174b79] disabled:cursor-not-allowed disabled:bg-[#5b7895]"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactComponent;

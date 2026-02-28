import React from "react";
import { Link } from "react-router-dom";
import { Anchor, ArrowRight, PhoneCall } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      <div className="absolute inset-0 bg-[#061c36]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(42,118,196,0.26),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(242,177,74,0.22),transparent_34%)]" />

      <div
        className="relative mx-auto flex w-[92%] max-w-6xl flex-col overflow-hidden rounded-3xl border border-[#5d7fa3]/40 bg-cover bg-center shadow-[0_30px_80px_rgba(2,10,22,0.55)]"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#021224]/94 via-[#021224]/75 to-[#07203a]/55" />
        <div className="relative z-10 px-6 py-10 sm:px-10 md:px-12 md:py-14 lg:w-[75%]">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7ea2c7]/50 bg-[#0d2e52]/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#C7DDF2]">
            <Anchor size={14} />
            Trusted Ship Partner
          </p>

          <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Keep Your Fleet Efficient, Compliant, and Ready for Every Voyage
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#d4e4f4] sm:text-base md:text-lg">
            GD Ship Management delivers commercial, technical, and crew support designed to reduce downtime and improve vessel performance with consistent operational discipline.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E3B160] px-6 py-3 text-sm font-semibold text-[#07203b] transition hover:bg-[#f2c476] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2c476]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+919467842122"
              className="inline-flex items-center gap-2 rounded-full border border-[#8db0d3] bg-[#0b2b4d]/65 px-6 py-3 text-sm font-semibold text-[#dcedfc] transition hover:border-[#E3B160] hover:text-[#E3B160] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f2c476]"
            >
              <PhoneCall size={16} />
              +91 9467842122
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

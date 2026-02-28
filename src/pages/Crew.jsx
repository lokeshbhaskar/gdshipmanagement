import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Crew = () => {
  const pillars = [
    "Crew sourcing and selection with quality filters",
    "Training and competence development tracking",
    "Welfare-focused crew lifecycle coordination",
    "Reliable manning aligned with vessel schedules",
  ];

  return (
    <section className="w-full bg-[#061B33] px-4 pb-14 pt-40 sm:px-6 md:px-10 md:pt-44">
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-[#4B7396]/70 shadow-[0_28px_90px_rgba(2,10,22,0.58)]">
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/crewpage.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#021224]/95 via-[#0b2437]/82 to-[#1b4a3a]/56" />
          <div className="relative z-10 px-5 py-12 sm:px-8 md:px-12 md:py-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#BFD6EB]">
              Services / Crew
            </p>
            <h1 className="font-serif text-3xl font-semibold leading-tight text-[#F4F9FF] sm:text-5xl md:text-6xl">
              Crew Management
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#C5D8EA] sm:text-base md:text-lg">
              We provide dependable crew management with trained seafarers,
              compliance-focused manning, and strong welfare standards that
              support consistent vessel performance.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/"
                className="rounded-full border border-[#7FA4C9] bg-[#0B2D50]/70 px-4 py-2 text-xs font-semibold tracking-wide text-[#E5F0FB] transition hover:border-[#E3B160] hover:text-[#FFD38D]"
              >
                Home
              </Link>
              <span className="rounded-full bg-[#5FAA86] px-4 py-2 text-xs font-semibold tracking-wide text-[#072E24]">
                Crew Management
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 bg-[#082644] px-5 py-8 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:px-12 md:py-10">
          <div className="rounded-2xl border border-[#4A6D90] bg-[#0B2D4F]/80 p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-[#E5EFF8] sm:text-3xl">
              Our Crew Expertise
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#BFD3E6] sm:text-base">
              Our crew team helps owners run operations efficiently with
              authentic, capable personnel and structured manning support across
              the vessel lifecycle.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pillars.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#56799D] bg-[#0D3257] px-4 py-3 text-sm text-[#D8E8F7]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#4A6D90] bg-[#0B2D4F]/80 p-5 sm:p-6">
            <h3 className="text-xl font-semibold text-[#E5EFF8]">
              Looking for Reliable Manning?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#BFD3E6]">
              We can support your crewing requirements with consistent quality,
              faster placement, and strong maritime discipline.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5FAA86] px-5 py-3 text-sm font-semibold text-[#072E24] transition hover:bg-[#77c49f]"
            >
              Discuss Crew Planning
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;

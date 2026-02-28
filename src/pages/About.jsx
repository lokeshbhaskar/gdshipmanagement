import React from "react";
import { Link } from "react-router-dom";
import { Anchor, ArrowRight } from "lucide-react";
import AboutUs from "../components/home/AboutUs";

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-[#061B33] px-4 pb-12 pt-40 sm:px-6 md:px-10 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(45,120,197,0.28),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(236,177,80,0.20),transparent_30%)]" />
        <div
          className="relative mx-auto grid max-w-7xl gap-7 overflow-hidden rounded-3xl border border-[#4A7398]/65 bg-cover bg-center shadow-[0_28px_90px_rgba(1,10,22,0.58)] md:grid-cols-2"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#021224]/94 via-[#021224]/78 to-[#09325a]/58" />

          <div className="relative z-20 px-5 py-10 sm:px-8 md:px-10 md:py-14 lg:px-12">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#87A8C8]/55 bg-[#0E2E50]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D5E6F6]">
              <Anchor size={14} />
              About GD Ship Management
            </p>

            <h1 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Built on Maritime Discipline, Trusted by Vessel Owners
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#D5E3F1] sm:text-base md:text-lg">
              We combine practical marine expertise, structured operations, and
              people-first execution to deliver dependable ship management
              across commercial, technical, and crew functions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#6D90B2] bg-[#0A2746]/75 px-4 py-2 text-xs font-medium tracking-wide text-[#D7E7F7] sm:text-sm">
                Safety & Compliance First
              </span>
              <span className="rounded-full border border-[#6D90B2] bg-[#0A2746]/75 px-4 py-2 text-xs font-medium tracking-wide text-[#D7E7F7] sm:text-sm">
                Transparent Reporting
              </span>
              <span className="rounded-full border border-[#6D90B2] bg-[#0A2746]/75 px-4 py-2 text-xs font-medium tracking-wide text-[#D7E7F7] sm:text-sm">
                Reliable 24/7 Support
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E3B160] px-6 py-3 text-sm font-semibold text-[#08233F] transition hover:bg-[#F2C478] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C478]"
              >
                Contact Our Team
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/commercial-management"
                className="inline-flex items-center rounded-full border border-[#8DB1D4] bg-[#0D2F53]/60 px-6 py-3 text-sm font-semibold text-[#E0EEFB] transition hover:border-[#E3B160] hover:text-[#E3B160] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3B160]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative z-20 flex items-end p-5 sm:p-6 md:p-8">
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#5F82A4] bg-[#082644]/80 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">24/7</p>
                <p className="mt-1 text-xs text-[#C2D8EC] sm:text-sm">Operational Monitoring</p>
              </div>
              <div className="rounded-2xl border border-[#5F82A4] bg-[#082644]/80 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Global</p>
                <p className="mt-1 text-xs text-[#C2D8EC] sm:text-sm">Fleet Support Network</p>
              </div>
              <div className="rounded-2xl border border-[#5F82A4] bg-[#082644]/80 p-4 backdrop-blur-sm">
                <p className="text-2xl font-semibold text-white">Expert</p>
                <p className="mt-1 text-xs text-[#C2D8EC] sm:text-sm">Marine Management Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutUs variant="full" />
    </>
  );
};

export default About;

import React, { forwardRef } from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AboutUs = forwardRef(({ variant = "compact" }, ref) => {
  const isFull = variant === "full";
  const rows = isFull ? 6 : 5;
  const cols = isFull ? 6 : 5;
  const navigate = useNavigate();

  const highlights = [
    "Transparent vessel operations with structured reporting",
    "Experienced team covering commercial, technical, and crew functions",
    "Safety-first execution aligned with international standards",
    "Practical support tailored to each owner's operating model",
  ];

  return (
    <section ref={ref} className="relative w-full bg-[#061B33] py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="w-full text-center relative z-20 px-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#AFC9E4]">
            About Our Company
          </p>
          <h1
            className={`font-semibold text-[#E5EEF8] ${
              isFull
                ? "text-4xl md:text-6xl lg:text-7xl"
                : "text-3xl md:text-5xl lg:text-6xl"
            }`}
          >
            Trusted Ship Management Partner
          </h1>
        </div>

        <div className="mt-8 md:mt-10">
          <div
            className={`relative rounded-3xl border border-[#3C6387] overflow-hidden shadow-[0_24px_70px_rgba(2,10,22,0.52)] flex flex-col lg:flex-row ${
              isFull ? "lg:min-h-[620px]" : "lg:min-h-[500px]"
            }`}
            style={{
              backgroundImage: "url('/about.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#04152b]/72" />

            <div
              className={`w-full lg:w-[58%] bg-[#f7fbff]/95 p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl relative z-20 flex flex-col ${
                isFull ? "justify-between" : "justify-start"
              }`}
            >
              <div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#0F3257]">
                  Who We Are
                </h2>
                <p className="text-[#2E4863] leading-relaxed text-sm sm:text-base md:text-lg">
                  GDSHIP is a versatile maritime organization delivering
                  commercial, technical, crew, and quality-driven ship
                  management solutions for vessel owners worldwide.
                </p>

                <p className="mt-4 text-[#2E4863] leading-relaxed text-sm sm:text-base md:text-lg">
                  Our focus is clear: help clients run vessels safely,
                  efficiently, and profitably through disciplined operations,
                  skilled people, and dependable execution at every stage.
                </p>

                {isFull && (
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#B8CCE0] bg-white px-3 py-2 text-sm text-[#1E3E5F]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {!isFull ? (
                <button
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B2F52] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#124572] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2F52]"
                  onClick={() => navigate("/about")}
                >
                  Read More
                  <HiChevronDoubleRight />
                </button>
              ) : (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl bg-[#0B2F52] px-3 py-4 text-center text-white">
                    <p className="text-2xl font-semibold">24/7</p>
                    <p className="mt-1 text-xs text-[#B8CCE0]">Operational Support</p>
                  </div>
                  <div className="rounded-xl bg-[#0B2F52] px-3 py-4 text-center text-white">
                    <p className="text-2xl font-semibold">Global</p>
                    <p className="mt-1 text-xs text-[#B8CCE0]">Owner Assistance</p>
                  </div>
                  <div className="rounded-xl bg-[#0B2F52] px-3 py-4 text-center text-white">
                    <p className="text-2xl font-semibold">Safety</p>
                    <p className="mt-1 text-xs text-[#B8CCE0]">Compliance First</p>
                  </div>
                  <div className="rounded-xl bg-[#0B2F52] px-3 py-4 text-center text-white">
                    <p className="text-2xl font-semibold">Skilled</p>
                    <p className="mt-1 text-xs text-[#B8CCE0]">Marine Team</p>
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:flex lg:w-[42%] relative items-center justify-center p-6 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b2f52]/35 to-[#04152b]/70" />
              <div
                className={`grid gap-2 w-full h-full relative z-10 ${
                  isFull ? "grid-cols-6" : "grid-cols-5"
                }`}
              >
                {Array.from({ length: rows * cols }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-md border border-[#6F93B4]/45 ${
                      i % 2 === 0 ? "bg-[#8FB0CF]/20" : "bg-transparent"
                    } aspect-square`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {isFull && (
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#3D6589] bg-[#0A2746] p-5">
              <h3 className="text-lg font-semibold text-[#E5EEF8]">Our Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B9CFE3]">
                To deliver practical ship management solutions that improve
                reliability, compliance, and commercial outcomes for every voyage.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3D6589] bg-[#0A2746] p-5">
              <h3 className="text-lg font-semibold text-[#E5EEF8]">Our Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B9CFE3]">
                To be a trusted long-term maritime partner known for disciplined
                operations, skilled teams, and measurable client value.
              </p>
            </div>
            <div className="rounded-2xl border border-[#3D6589] bg-[#0A2746] p-5">
              <h3 className="text-lg font-semibold text-[#E5EEF8]">Our Values</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B9CFE3]">
                Safety, accountability, transparency, and continuous improvement
                are the principles guiding every operational decision.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default AboutUs;

import { Link } from "react-router-dom";
import { Anchor, ArrowRight, BadgeCheck } from "lucide-react";

const services = [
  {
    title: "Commercial Management",
    image: "/commercial.jpg",
    route: "/commercial-management",
    summary:
      "Freight strategy, chartering support, and voyage cost control to improve vessel profitability.",
    points: ["Chartering", "Post-fixture ops", "Marine accounting"],
  },
  {
    title: "Technical Management",
    image: "/technical.jpg",
    route: "/technical-management",
    summary:
      "Planned maintenance and technical supervision focused on safety, compliance, and uptime.",
    points: ["PMS planning", "Class support", "Performance tracking"],
  },
  {
    title: "Crew Management",
    image: "/crewpage.jpg",
    route: "/crew-management",
    summary:
      "Reliable crewing solutions with trained officers and ratings for smooth vessel operations.",
    points: ["Recruitment", "Crew welfare", "Training oversight"],
  },
  {
    title: "Consultancy Services",
    image: "/CONSULTANCY.jpg",
    route: "/consultancy-services",
    summary:
      "Operational consulting and process guidance to strengthen marine business decisions.",
    points: ["Compliance advisory", "Operations audit", "Project guidance"],
  },
];

const Service = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#061B33] py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(33,106,179,0.30),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(255,184,77,0.18),transparent_35%),radial-gradient(circle_at_40%_85%,rgba(13,75,138,0.35),transparent_40%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#90B6DA]/40 bg-[#0F2C4E]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#C7DDF2]">
              <Anchor size={14} />
              Marine Solutions
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-[#E8F1FA] sm:text-4xl lg:text-5xl">
              Ship Management Services Built for Performance at Sea
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#BBD0E4] sm:text-base">
              End-to-end support across operations, technical care, and crew management with an approach designed for safety, reliability, and commercial results.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#E0A33A] px-6 py-3 text-sm font-semibold text-[#08203B] transition hover:bg-[#eeb354]"
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-[#7ea1c5]/20 bg-[#082544]/70 shadow-[0_22px_60px_rgba(2,10,22,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C8A45D]/60"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05162c]/90 via-[#05162c]/30 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              <div className="space-y-4 p-5">
                <p className="text-sm leading-relaxed text-[#c2d6ea]">
                  {service.summary}
                </p>

                <ul className="space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-[#D8E8F7]"
                    >
                      <BadgeCheck size={16} className="text-[#E0A33A]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.route}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E4B55D] transition hover:text-[#ffd084]"
                >
                  Explore Service
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

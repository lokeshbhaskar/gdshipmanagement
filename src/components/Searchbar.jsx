import React from "react";
import { HiX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const searchIndex = [
    {
        title: "Home",
        route: "/",
        snippet: "Ship management overview and strategic maritime solutions.",
        keywords: ["home", "ship management", "gd ship", "maritime", "services", "fleet"],
    },
    {
        title: "About Us",
        route: "/about",
        snippet: "Company profile, mission, vision, and management values.",
        keywords: ["about", "company", "mission", "vision", "values", "team", "who we are"],
    },
    {
        title: "Commercial Management",
        route: "/commercial-management",
        snippet: "Chartering, voyage planning, post-fixture, and marine accounting.",
        keywords: ["commercial", "chartering", "freight", "voyage", "post fixture", "accounting"],
    },
    {
        title: "Technical Management",
        route: "/technical-management",
        snippet: "Maintenance planning, inspections, class compliance, and reliability.",
        keywords: ["technical", "maintenance", "inspection", "class", "compliance", "engineering"],
    },
    {
        title: "Crew Management",
        route: "/crew-management",
        snippet: "Crew sourcing, manning, training, and welfare support.",
        keywords: ["crew", "manning", "seafarer", "training", "welfare", "recruitment"],
    },
    {
        title: "Consultancy Services",
        route: "/consultancy-services",
        snippet: "Operational and compliance advisory for maritime operations.",
        keywords: ["consultancy", "advisory", "compliance", "operations", "audit", "guidance"],
    },
    {
        title: "Contact",
        route: "/contact",
        snippet: "Send your requirement and connect with the team.",
        keywords: ["contact", "email", "phone", "address", "message", "support"],
    },
];

const Searchbar = ({ showSearchBar, setShowSearchBar }) => {
    const MotionDiv = motion.div;
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const results = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) return [];

        return searchIndex
            .filter((item) => {
                const haystack = `${item.title} ${item.snippet} ${item.keywords.join(" ")}`.toLowerCase();
                return haystack.includes(normalized);
            })
            .slice(0, 6);
    }, [query]);

    const goToResult = (route) => {
        navigate(route);
        setShowSearchBar(false);
        setQuery("");
    };

    const handleSearchSubmit = (e) => {
        if (e.key !== "Enter") return;
        e.preventDefault();

        if (!query.trim()) {
            toast.info("Type a keyword to search.");
            return;
        }

        if (results.length === 0) {
            toast.info("No matching page found. Try another keyword.");
            return;
        }

        goToResult(results[0].route);
    };

    return (
        <AnimatePresence>
            {showSearchBar && <MotionDiv
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full absolute top-0 left-0 z-50 bg-[#1A334E] bg-opacity-95 
                       border-b-4 border-white shadow-lg animate-slideDown"
            >
                <div className="flex items-center justify-end px-6 py-4">
                    <button
                        onClick={() => {
                            setShowSearchBar(false);
                            setQuery("");
                        }}
                        className="cursor-pointer text-white text-3xl hover:rotate-90 transition-transform"
                    >
                        <HiX />
                    </button>
                </div>

                <MotionDiv
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                    className="pb-10 grid grid-cols-12">
                    <div className="col-span-10 col-start-2 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4 text-center">

                        <h1 className="text-white text-2xl md:text-3xl font-serif font-semibold tracking-wide mb-4">
                            What Are You Looking For?
                        </h1>

                        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg 
                                    w-full max-w-xl mx-auto px-3 py-2">
                            <FiSearch className="text-[#1A334E] text-2xl ml-2" />

                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                                placeholder="Search pages, services, topics..."
                                className="w-full px-4 py-2 md:py-3 focus:outline-none text-gray-700"
                            />
                        </div>

                        {query.trim() && (
                            <div className="mt-4 w-full max-w-xl mx-auto rounded-2xl overflow-hidden border border-white/20 bg-white/95 shadow-xl text-left">
                                {results.length > 0 ? (
                                    results.map((result) => (
                                        <button
                                            key={result.route}
                                            onClick={() => goToResult(result.route)}
                                            className="w-full px-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-[#f0f6ff] transition"
                                        >
                                            <p className="text-sm font-semibold text-[#14395e]">{result.title}</p>
                                            <p className="text-xs text-gray-600 mt-1">{result.snippet}</p>
                                        </button>
                                    ))
                                ) : (
                                    <p className="px-4 py-3 text-sm text-gray-600">
                                        No matching page found.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </MotionDiv>
            </MotionDiv>
            }
        </AnimatePresence>
    );
};

export default Searchbar;

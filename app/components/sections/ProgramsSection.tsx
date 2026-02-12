"use client";
import Link from "next/link";
import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Program = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string;
  href: string;
};

const programs: Program[] = [
  {
    number: "01",
    title: "1:1 Coaching",
    subtitle: "The Private Standard",
    description:
      "Fully personalized training and nutrition protocols built around your body, your schedule, and your goals. Direct access to your personal fitness coach with weekly adjustments, form reviews, and performance tracking.",
    keywords:
      "Personal fitness coach, elite personal trainer, private coaching",
    href: "/coaching",
  },
  {
    number: "02",
    title: "Online Transformation",
    subtitle: "12-Week System",
    description:
      "A structured online fitness coaching program engineered for body transformation. Progressive training protocols, macro-targeted nutrition frameworks, and systematic check-ins deliver measurable change.",
    keywords:
      "Online fitness coaching, body transformation coach, fitness coaching program",
    href: "/transformation",
  },
  {
    number: "03",
    title: "Strength & Physique",
    subtitle: "Optimization Protocol",
    description:
      "Advanced strength training programming for experienced lifters seeking next-level physique development. Periodized protocols and progressive overload systems designed to break through plateaus.",
    keywords: "Strength training program, physique coaching, strength coach",
    href: "/strength-physique",
  },
  {
    number: "04",
    title: "Performance Systems",
    subtitle: "Beyond Training",
    description:
      "A holistic performance optimization protocol integrating training, nutrition, recovery, sleep architecture, and stress management for high-performing individuals.",
    keywords:
      "Performance optimization, online personal training, fitness transformation",
    href: "/performance-systems",
  },
];

export default function ProgramsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      id="programs"
      ref={ref}
      className="relative py-32 md:py-44 bg-[#0D0D0D]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]/80 mb-6 block">
            Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-[#E8E4DE] mb-6">
            Engineered Programs
          </h2>

          <p className="text-[15px] text-[#6A6A6A] font-light max-w-xl mx-auto">
            Each system is built on principles of progressive overload,
            metabolic precision, and relentless accountability.
          </p>
        </motion.div>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]/50">
          {programs.map((program, index) => (
            <Link
              key={program.number}
              href={program.href}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-[#0D0D0D] p-10 md:p-14 hover:bg-[#111111] transition-all duration-700 relative h-full cursor-pointer"
              >
                {/* Large Background Number */}
                <div className="absolute top-10 right-10 text-[#1A1A1A] text-6xl font-extralight group-hover:text-[#C9A96E]/10 transition-colors duration-700">
                  {program.number}
                </div>

                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mb-4 block">
                  {program.subtitle}
                </span>

                <h3 className="text-2xl md:text-3xl font-extralight text-[#E8E4DE] mb-6 tracking-wide">
                  {program.title}
                </h3>

                <p className="text-[14px] leading-relaxed text-[#6A6A6A] font-light mb-8">
                  {program.description}
                </p>

                <div className="flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#8A8A8A] group-hover:text-[#C9A96E] transition-colors duration-500">
                  <span>Learn More</span>
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>

                <div className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-[#C9A96E]/0 group-hover:via-[#C9A96E]/20 to-transparent transition-all duration-700" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
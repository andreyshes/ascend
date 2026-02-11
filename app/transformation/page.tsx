"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, Timer, Target, Zap, CheckCircle } from "lucide-react";

/**
 * 1. ANIMATION PROPS
 * Ensuring strict TS compliance for the 'ease' property
 */
const fadeInProps: HTMLMotionProps<"div"> = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: {
		duration: 0.8,
		ease: [0.16, 1, 0.3, 1] as const,
	},
};

const PROGRAM_PILLARS = [
	"12 Weeks Structured Progression",
	"Custom Training Split",
	"Macro-Based Nutrition Targets",
	"Weekly Check-In Adjustments",
	"Body Composition Tracking",
	"Performance Data Monitoring",
];

const PHASES = [
	{
		title: "Phase I: Foundation",
		subtitle: "Weeks 1-4",
		desc: "Metabolic calibration, training baseline establishment, and nutrition precision logic.",
		icon: <Target className="w-5 h-5 text-[#C9A96E]" />,
	},
	{
		title: "Phase II: Acceleration",
		subtitle: "Weeks 5-8",
		desc: "Increased volume, controlled intensity progression, and significant visible physique shifts.",
		icon: <Zap className="w-5 h-5 text-[#C9A96E]" />,
	},
	{
		title: "Phase III: Refinement",
		subtitle: "Weeks 9-12",
		desc: "Body composition optimization, structural balance, and peaking for end-state condition.",
		icon: <Timer className="w-5 h-5 text-[#C9A96E]" />,
	},
];

export default function TransformationPage() {
	return (
		<main className="bg-[#0A0A0A] text-[#E8E4DE] selection:bg-[#C9A96E]/20">
			{/* HERO SECTION - Focused on the "Visible Change" */}
			<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/coach.jpg"
						alt="Elite online fitness transformation coaching"
						fill
						priority
						className="object-cover object-center brightness-[0.4] scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0A0A0A]" />
				</div>

				<motion.div
					className="relative z-10 text-center px-6 max-w-4xl"
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
				>
					<span className="text-[10px] sm:text-[11px] tracking-[0.6em] uppercase text-[#C9A96E] font-bold mb-6 block">
						The 12-Week Protocol
					</span>
					<h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-8 leading-[0.9]">
						Online <br />
						<span className="italic font-light">Transformation</span>
					</h1>
					<p className="text-base md:text-xl text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wide">
						A systematic approach to objective physical change.
					</p>
				</motion.div>
			</section>

			{/* OVERVIEW - Split layout with deep contrast */}
			<section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<motion.div {...fadeInProps}>
						<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10 leading-tight">
							Designed For <br />
							<span className="text-[#C9A96E]">Visible Change</span>
						</h2>
						<div className="space-y-6 text-[#8A8A8A] font-light text-lg leading-relaxed">
							<p>
								This is not a "fitness challenge." It is a 12-week
								high-performance protocol built on progressive overload and
								macro-targeted nutrition.
							</p>
							<p>
								We remove the guesswork. Every week builds on the last. The goal
								is not just a better workout—it is an entirely different
								<span className="text-[#E8E4DE]"> body composition</span>.
							</p>
						</div>
					</motion.div>

					<motion.div
						{...fadeInProps}
						className="bg-[#0D0D0D] border border-white/5 p-10 md:p-14 relative"
					>
						<div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-[#C9A96E]/50 to-transparent opacity-20" />
						<h3 className="text-xs uppercase tracking-[0.3em] text-[#C9A96E] mb-10 font-bold">
							System Architecture
						</h3>
						<ul className="space-y-5">
							{PROGRAM_PILLARS.map((pillar, i) => (
								<li key={i} className="flex items-center space-x-4">
									<CheckCircle className="w-4 h-4 text-[#C9A96E]/60 shrink-0" />
									<span className="text-sm md:text-base font-light text-[#A1A1A1] uppercase tracking-widest text-[13px]">
										{pillar}
									</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* TIMELINE SECTION - Phase-Based Progression */}
			<section className="py-32 bg-[#0D0D0D] border-y border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-24">
						<span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4 block">
							The Roadmap
						</span>
						<h2 className="text-4xl md:text-6xl font-extralight tracking-tight italic">
							Phase-Based Progression
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-12 relative">
						{PHASES.map((phase, i) => (
							<motion.div
								key={i}
								{...fadeInProps}
								className="relative p-8 border border-white/5 bg-[#0A0A0A] group hover:border-[#C9A96E]/30 transition-all duration-500"
							>
								<div className="mb-6">{phase.icon}</div>
								<div className="text-[10px] font-mono text-[#C9A96E] mb-2 uppercase tracking-widest opacity-60">
									{phase.subtitle}
								</div>
								<h4 className="text-xl font-light mb-4 uppercase tracking-tighter group-hover:text-[#C9A96E] transition-colors">
									{phase.title}
								</h4>
								<p className="text-[#6A6A6A] text-sm leading-relaxed font-light italic">
									"{phase.desc}"
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION - Clean & Authoritative */}
			<section className="py-40 text-center px-6 relative overflow-hidden">
				<motion.div {...fadeInProps} className="relative z-10">
					<h2 className="text-4xl md:text-7xl font-extralight mb-10 tracking-tighter">
						Built For <span className="font-normal">Execution</span>
					</h2>
					<p className="text-[#8A8A8A] font-light mb-16 max-w-2xl mx-auto leading-relaxed text-lg">
						This system is designed for individuals who want measurable results
						— not inspiration. If you are willing to execute the protocol, the
						system is engineered to handle the rest.
					</p>

					<Link
						href="/#apply"
						className="group inline-flex items-center space-x-6 px-14 py-6 bg-[#C9A96E] text-[#0A0A0A] text-[11px] tracking-[0.5em] uppercase font-black transition-all duration-700 hover:bg-white"
					>
						<span>Initiate Application</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
					</Link>
				</motion.div>
			</section>
		</main>
	);
}

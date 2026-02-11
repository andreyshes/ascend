"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, BarChart, HardHat, Cpu, CheckCircle2 } from "lucide-react";

/**
 * 1. Global Animation Prop
 * Ensures consistency and bypasses TS ease array errors
 */
const fadeInProps: HTMLMotionProps<"div"> = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: {
		duration: 0.9,
		ease: [0.16, 1, 0.3, 1] as const,
	},
};

const INCLUSIONS = [
	"Periodized Strength Programming",
	"Hypertrophy Volume Optimization",
	"Progressive Overload Tracking",
	"Movement Efficiency Refinement",
	"Fatigue & Recovery Management",
	"Performance Metric Analysis",
];

const FEATURES = [
	{
		title: "Strength Foundation",
		desc: "Neural adaptation and force production optimization for raw power.",
		icon: <Cpu className="w-5 h-5 text-[#C9A96E]" />,
	},
	{
		title: "Targeted Hypertrophy",
		desc: "Scientific mechanical tension and metabolic stress modeling for density.",
		icon: <BarChart className="w-5 h-5 text-[#C9A96E]" />,
	},
	{
		title: "Recovery Control",
		desc: "Treating sleep and stress as non-negotiable performance variables.",
		icon: <HardHat className="w-5 h-5 text-[#C9A96E]" />,
	},
];

export default function StrengthPhysiquePage() {
	return (
		<main className="bg-[#0A0A0A] text-[#E8E4DE] selection:bg-[#C9A96E] selection:text-black">
			{/* HERO SECTION - Immersive and Bold */}
			<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/coach.jpg"
						alt="Advanced strength and physique coaching"
						fill
						priority
						className="object-cover object-center scale-105 brightness-[0.4] grayscale-[30%]"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/20" />
				</div>

				<motion.div
					className="relative z-10 text-center px-6 max-w-4xl"
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
				>
					<span className="text-[10px] sm:text-[11px] tracking-[0.6em] uppercase text-[#C9A96E] font-bold mb-8 block">
						Optimization Protocol
					</span>
					<h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-8 leading-[0.85]">
						Strength <br />
						<span className="italic font-light">Physique</span>
					</h1>
					<p className="text-base md:text-lg text-[#8A8A8A] font-light leading-relaxed max-w-xl mx-auto tracking-wide">
						Elite-level architecture for lifters ready to break plateaus and
						operationalize their performance.
					</p>
				</motion.div>
			</section>

			{/* CORE STRUCTURE - Asymmetric Technical Layout */}
			<section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-12 gap-16 items-start">
					<motion.div {...fadeInProps} className="lg:col-span-7">
						<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-12">
							Engineered <span className="italic">Progression</span>
						</h2>
						<div className="w-24 h-[1px] bg-[#C9A96E] mb-12" />

						<div className="space-y-8 text-lg text-[#8A8A8A] font-light leading-relaxed max-w-2xl">
							<p>
								This protocol integrates periodized strength blocks,
								hypertrophy-focused volume cycles, and structured deload phases
								to maximize muscle development.
							</p>
							<p className="text-[#E8E4DE]">
								Every training variable—volume, intensity, frequency—is
								controlled to ensure you never waste a single set.
							</p>
						</div>
					</motion.div>

					<motion.div
						{...fadeInProps}
						className="lg:col-span-5 bg-[#0D0D0D] border border-white/5 p-8 md:p-12 relative overflow-hidden"
					>
						<div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/5 uppercase">
							Ref: SP-v4.0
						</div>
						<h3 className="text-sm uppercase tracking-[0.3em] text-[#C9A96E] mb-10 font-bold">
							System Inclusions
						</h3>
						<ul className="space-y-6">
							{INCLUSIONS.map((item, i) => (
								<li key={i} className="flex items-start space-x-4 group">
									<CheckCircle2 className="w-5 h-5 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors shrink-0 mt-0.5" />
									<span className="text-sm font-light text-[#A1A1A1] group-hover:text-[#E8E4DE] transition-colors tracking-wide">
										{item}
									</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* DIFFERENTIATION - The "Three Pillars" Grid */}
			<section className="py-32 bg-[#0D0D0D] border-y border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
						<div className="max-w-2xl">
							<span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4 block">
								The ASCEND Standard
							</span>
							<h2 className="text-4xl md:text-5xl font-light tracking-tight">
								Beyond Basic Programming
							</h2>
						</div>
						<p className="text-[#6A6A6A] text-sm max-w-sm font-light leading-relaxed">
							We eliminate randomness and replace it with structured,
							data-driven adaptation cycles designed to force growth.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5">
						{FEATURES.map((feature, i) => (
							<motion.div
								key={i}
								{...fadeInProps}
								className="bg-[#0A0A0A] p-12 hover:bg-[#0D0D0D] transition-all duration-700"
							>
								<div className="mb-8 opacity-80">{feature.icon}</div>
								<h4 className="text-lg font-normal mb-4 tracking-tighter uppercase">
									{feature.title}
								</h4>
								<p className="text-[#6A6A6A] text-sm leading-relaxed font-light">
									{feature.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION - High Contrast Finish */}
			<section className="py-40 text-center px-6 relative">
				<motion.div {...fadeInProps} className="relative z-10">
					<h2 className="text-4xl md:text-6xl font-extralight mb-10 tracking-tighter">
						Elevate Your <span className="italic font-light">Output</span>
					</h2>
					<p className="text-[#8A8A8A] font-light mb-16 max-w-xl mx-auto">
						This system is built for the disciplined lifter. Applications are
						reviewed to ensure individual readiness for high-standard protocol
						execution.
					</p>

					<Link
						href="/#apply"
						className="group relative inline-flex items-center px-16 py-6 bg-[#C9A96E] text-[#0A0A0A] text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-500 hover:bg-white overflow-hidden"
					>
						<span className="relative z-10">Apply For Admission</span>
						<ArrowRight className="ml-4 w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform" />
					</Link>
				</motion.div>
			</section>
		</main>
	);
}

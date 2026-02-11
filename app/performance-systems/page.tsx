"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, BarChart3, Binary } from "lucide-react";

/** * 1. ANIMATION CONSTANTS
 * Typed correctly to avoid the previous TS error
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

// 2. DATA STRUCTURES
const PROTOCOL_STEPS = [
	"Periodized Strength Cycles",
	"Hypertrophy-Focused Volume Blocks",
	"Mechanical Tension Optimization",
	"Movement Efficiency Refinement",
	"Progressive Overload Systems",
	"Strategic Deload & Recovery Phases",
	"Performance Metric Tracking",
];

const PILLARS = [
	{
		title: "Neurological Focus",
		description:
			"Maximizing force production and motor unit recruitment through specific loading parameters.",
		icon: <Zap className="w-5 h-5" />,
	},
	{
		title: "Hypertrophy Precision",
		description:
			"Targeted mechanical tension and metabolic stress modeling designed for muscle density.",
		icon: <Binary className="w-5 h-5" />,
	},
	{
		title: "Recovery Architecture",
		description:
			"Sleep, stress load, and volume management integrated into your weekly progression.",
		icon: <BarChart3 className="w-5 h-5" />,
	},
];

export default function StrengthPhysiquePage() {
	return (
		<main className="bg-[#0A0A0A] text-[#E8E4DE] selection:bg-[#C9A96E]/30">
			{/* HERO SECTION - Refined with subtle scale effect */}
			<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/coach.jpg" // Ensure this is a high-res shot of heavy lifting/plates
						alt="Advanced strength and physique coaching"
						fill
						priority
						className="object-cover object-center grayscale-[20%] brightness-[0.4] scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/40" />
				</div>

				<motion.div
					className="relative z-10 text-center px-6 max-w-5xl"
					initial={{ opacity: 0, scale: 0.98 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
				>
					<span className="text-[10px] sm:text-[11px] tracking-[0.6em] uppercase text-[#C9A96E] font-semibold mb-6 block">
						Optimization Protocol
					</span>
					<h1 className="text-5xl md:text-8xl font-extralight tracking-tighter mb-8 leading-[0.9]">
						Strength <span className="text-[#8A8A8A]">&</span> <br />
						<span className="italic font-light">Physique</span>
					</h1>
					<p className="text-base md:text-lg text-[#A1A1A1] font-light leading-relaxed max-w-2xl mx-auto uppercase tracking-wider">
						Elite programming for the experienced lifter.
					</p>
				</motion.div>
			</section>

			{/* PHILOSOPHY SECTION - Two-column industrial layout */}
			<section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
					<motion.div {...fadeInProps}>
						<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-10 leading-tight">
							Built For The <br />
							<span className="text-[#C9A96E]">Already Committed</span>
						</h2>
						<div className="w-20 h-[1px] bg-[#C9A96E]/50 mb-10" />
						<div className="space-y-6 text-[#8A8A8A] font-light text-lg leading-relaxed">
							<p>
								This is not introductory training. This system is engineered for
								lifters who understand intensity, progressive overload, and
								technical execution.
							</p>
							<p className="border-l border-[#C9A96E]/30 pl-6 italic">
								Every phase is periodized. Every volume block is calculated.
								Progress is no longer a variable—it is a result of design.
							</p>
						</div>
					</motion.div>

					<motion.div
						{...fadeInProps}
						className="bg-[#0D0D0D] border border-white/5 p-10 md:p-16"
					>
						<h3 className="text-xs uppercase tracking-[0.3em] text-[#C9A96E] mb-10 font-bold">
							Protocol Structure
						</h3>
						<ul className="space-y-6">
							{PROTOCOL_STEPS.map((step, index) => (
								<li
									key={index}
									className="flex items-center group cursor-default"
								>
									<span className="text-[10px] text-[#C9A96E]/40 mr-4 font-mono">
										0{index + 1}
									</span>
									<span className="text-sm md:text-base font-light text-[#A1A1A1] group-hover:text-[#E8E4DE] transition-colors uppercase tracking-widest">
										{step}
									</span>
									<ChevronRight className="w-3 h-3 ml-auto text-[#C9A96E]/0 group-hover:text-[#C9A96E]/100 transition-all -translate-x-2 group-hover:translate-x-0" />
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* DIFFERENTIATION SECTION - Grid with "Engineering" feel */}
			<section className="py-32 bg-[#0D0D0D] border-y border-white/5 relative">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-24">
						<span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4 block font-medium">
							The Architecture
						</span>
						<h2 className="text-4xl md:text-6xl font-extralight tracking-tight italic">
							Engineering Beyond The Plateau
						</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{PILLARS.map((pillar, i) => (
							<motion.div
								key={i}
								{...fadeInProps}
								className="p-8 border border-white/5 hover:border-[#C9A96E]/30 transition-all duration-500 bg-[#0A0A0A]"
							>
								<div className="w-12 h-12 rounded-full border border-[#C9A96E]/20 flex items-center justify-center mb-8 text-[#C9A96E]">
									{pillar.icon}
								</div>
								<h4 className="text-xl font-light mb-4 uppercase tracking-tighter">
									{pillar.title}
								</h4>
								<p className="text-[#6A6A6A] text-sm leading-relaxed font-light">
									{pillar.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION - High intensity finish */}
			<section className="py-48 text-center px-6 relative">
				<div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center justify-center text-[20vw] font-black uppercase tracking-tighter text-white/5 select-none">
					Ascend
				</div>

				<motion.div {...fadeInProps} className="relative z-10">
					<h2 className="text-4xl md:text-7xl font-extralight mb-12 tracking-tighter">
						Operate At A <br />
						<span className="font-normal italic">Higher Level</span>
					</h2>
					<Link
						href="/#apply"
						className="group relative inline-flex items-center justify-center px-16 py-6 bg-transparent border border-[#C9A96E] text-[#C9A96E] text-[11px] tracking-[0.4em] uppercase font-bold overflow-hidden transition-all duration-500 hover:text-[#0A0A0A]"
					>
						<div className="absolute inset-0 w-0 bg-[#C9A96E] transition-all duration-500 ease-[0.16, 1, 0.3, 1] group-hover:w-full" />
						<span className="relative z-10 flex items-center">
							Apply For Admission <ArrowRight className="ml-4 w-4 h-4" />
						</span>
					</Link>
				</motion.div>
			</section>
		</main>
	);
}

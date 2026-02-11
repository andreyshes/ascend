"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Activity, Target, Shield } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

/** * 1. DEFINE OUTSIDE THE COMPONENT
 * We type this strictly so Framer Motion knows 'ease' is a cubic-bezier tuple.
 */
const fadeIn: HTMLMotionProps<"div"> = {
	initial: { opacity: 0, y: 20 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true },
	transition: {
		duration: 0.8,
		// 'as const' tells TS this is a fixed 4-number tuple, not just a random number array
		ease: [0.16, 1, 0.3, 1] as const,
	},
};

const INCLUSIONS = [
	"Fully Custom Training Protocol",
	"Precision Nutrition Framework",
	"Weekly Performance Check-Ins",
	"Form & Movement Analysis",
	"Direct Communication Access",
	"Recovery & Sleep Optimization",
	"Progress Tracking & Metrics Review",
];

const DIFFERENTIATORS = [
	{
		title: "System Architecture",
		description:
			"Structured progression models that evolve with your adaptation curve.",
		icon: <Activity className="w-5 h-5" />,
	},
	{
		title: "Measured Progress",
		description:
			"Data-driven adjustments based on performance, recovery, and physique metrics.",
		icon: <Target className="w-5 h-5" />,
	},
	{
		title: "Elite Accountability",
		description:
			"Consistent oversight ensures no week is wasted and no standard drops.",
		icon: <Shield className="w-5 h-5" />,
	},
];

const SectionHeader = ({
	subtitle,
	title,
	description,
}: {
	subtitle?: string;
	title: string;
	description?: string;
}) => (
	<div className="flex flex-col items-center text-center mb-16">
		{subtitle && (
			<span className="text-[10px] sm:text-[11px] tracking-[0.4em] uppercase text-[#C9A96E] font-medium mb-4">
				{subtitle}
			</span>
		)}
		<h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
			{title}
		</h2>
		{description && (
			<p className="text-[#8A8A8A] font-light leading-relaxed max-w-2xl mx-auto">
				{description}
			</p>
		)}
	</div>
);

export default function CoachingPage() {
	// REMOVED the duplicate 'const fadeIn' that was here.
	// It was overriding the correctly typed one above.

	return (
		<main className="bg-[#0A0A0A] text-[#E8E4DE] selection:bg-[#C9A96E] selection:text-black">
			{/* HERO SECTION */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/coach.jpg"
						alt="Private 1:1 elite fitness coaching"
						fill
						priority
						className="object-cover object-center scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0A]" />
				</div>

				<motion.div
					className="relative z-10 text-center px-6 max-w-5xl"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<span className="text-[11px] tracking-[0.5em] uppercase text-[#C9A96E] mb-8 block font-medium">
						Established Excellence
					</span>
					<h1 className="text-6xl md:text-8xl font-extralight tracking-tighter mb-10 italic">
						1:1 <span className="not-italic font-normal">Coaching</span>
					</h1>
					<div className="w-24 h-px bg-[#C9A96E] mx-auto mb-10" />
					<p className="text-lg md:text-xl text-[#A1A1A1] font-light leading-relaxed max-w-2xl mx-auto italic">
						"The highest standard of physique engineering for the modern
						high-performer."
					</p>
				</motion.div>
			</section>

			{/* PHILOSOPHY SECTION */}
			<section className="py-32 md:py-48 max-w-7xl mx-auto px-6">
				<div className="grid lg:grid-cols-2 gap-20 items-center">
					<motion.div {...fadeIn}>
						<SectionHeader
							title="Precision Over Motivation"
							subtitle="The Methodology"
						/>
						<div className="space-y-6 -mt-8">
							<p className="text-[#8A8A8A] text-lg leading-relaxed font-light">
								This is not generic programming. Every training protocol is
								<span className="text-[#E8E4DE]">
									{" "}
									mathematically calibrated
								</span>{" "}
								to your physiology, schedule, and recovery capacity.
							</p>
							<p className="text-[#8A8A8A] text-lg leading-relaxed font-light">
								Weekly refinement ensures no wasted cycles. Every adjustment is
								a strategic move toward your ultimate physical objective.
							</p>
						</div>
					</motion.div>

					<motion.div
						{...fadeIn}
						className="relative bg-[#0D0D0D] border border-white/5 p-8 md:p-12 shadow-2xl"
					>
						<h3 className="text-xs uppercase tracking-[0.3em] text-[#C9A96E] mb-8">
							The Ecosystem
						</h3>
						<ul className="grid gap-5">
							{INCLUSIONS.map((item, i) => (
								<li
									key={i}
									className="flex items-center space-x-4 text-sm font-light text-[#A1A1A1]"
								>
									<Check className="w-4 h-4 text-[#C9A96E] shrink-0" />
									<span>{item}</span>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* DIFFERENTIATION SECTION */}
			<section className="py-32 bg-[#0D0D0D] border-y border-white/5">
				<div className="max-w-7xl mx-auto px-6">
					<SectionHeader
						subtitle="The Ascend Edge"
						title="Beyond Traditional Coaching"
						description="Most coaching gives workouts. ASCEND builds biological systems that compound over time."
					/>

					<div className="grid md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5">
						{DIFFERENTIATORS.map((item, i) => (
							<div
								key={i}
								className="bg-[#0A0A0A] p-12 hover:bg-[#0D0D0D] transition-colors duration-500"
							>
								<div className="text-[#C9A96E] mb-6">{item.icon}</div>
								<h4 className="text-xl font-light mb-4">{item.title}</h4>
								<p className="text-[#6A6A6A] text-sm leading-relaxed font-light">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-40 text-center px-6 relative overflow-hidden">
				<motion.div {...fadeIn} className="relative z-10">
					<h2 className="text-4xl md:text-6xl font-extralight mb-10 tracking-tight">
						Operate At A <span className="italic">Higher Standard</span>
					</h2>
					<p className="text-[#8A8A8A] font-light mb-12 max-w-xl mx-auto">
						Enrollment is limited to maintain the quality of 1:1 oversight.
						Applications are currently being reviewed for the upcoming quarter.
					</p>
					<Link
						href="/#apply"
						className="group inline-flex items-center space-x-4 px-12 py-5 bg-[#C9A96E] text-[#0A0A0A] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all duration-700"
					>
						<span>Apply For Admission</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
					</Link>
				</motion.div>
			</section>
		</main>
	);
}

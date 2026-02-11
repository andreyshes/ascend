"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Flame, Moon, Shield } from "lucide-react";

type Pillar = {
	icon: React.ElementType;
	title: string;
	number: string;
	description: string;
};

const pillars: Pillar[] = [
	{
		icon: Target,
		title: "Training Protocol",
		number: "01",
		description:
			"Periodized, progressive training systems tailored to your physique goals. Every set, rep, and tempo is programmed with precision. Strength training meets intelligent volume management for continuous adaptation.",
	},
	{
		icon: Flame,
		title: "Nutrition Framework",
		number: "02",
		description:
			"Macro-targeted nutrition protocols calibrated to your metabolism, activity level, and transformation phase. No fad diets. No guesswork. Science-driven nutrition that fuels performance and reshapes your physique.",
	},
	{
		icon: Moon,
		title: "Recovery Strategy",
		number: "03",
		description:
			"Structured recovery protocols including sleep optimization, deload programming, mobility systems, and stress management. Recovery is not passive rest — it is an engineered component of your transformation.",
	},
	{
		icon: Shield,
		title: "Accountability System",
		number: "04",
		description:
			"Weekly check-ins, biometric tracking, progress documentation, and direct coach communication. The system ensures no week is wasted. Accountability is the bridge between intention and transformation.",
	},
];

export default function MethodSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			id="method"
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
						The System
					</span>

					<h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-[#E8E4DE] mb-6">
						The ASCEND Method
					</h2>

					<p className="text-[15px] text-[#6A6A6A] font-light max-w-2xl mx-auto">
						Four integrated pillars form the foundation of every client
						transformation. Each element is calibrated, measured, and optimized
						to create compounding results.
					</p>
				</motion.div>

				{/* Pillars Grid */}
				<div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A]/30">
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon;

						return (
							<motion.div
								key={pillar.number}
								initial={{ opacity: 0, y: 30 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ duration: 0.8, delay: index * 0.12 }}
								className="group bg-[#0D0D0D] p-10 md:p-14 hover:bg-[#101010] transition-all duration-700"
							>
								<div className="flex items-start gap-6">
									{/* Icon */}
									<div className="shrink-0">
										<div className="w-14 h-14 border border-[#2D2D2D] group-hover:border-[#C9A96E]/30 transition-colors duration-500 flex items-center justify-center">
											<Icon
												size={22}
												className="text-[#C9A96E]/60"
												strokeWidth={1.2}
											/>
										</div>
									</div>

									{/* Content */}
									<div>
										<span className="text-[10px] tracking-[0.3em] text-[#C9A96E]/40 mb-3 block">
											{pillar.number}
										</span>

										<h3 className="text-xl md:text-2xl font-extralight text-[#E8E4DE] mb-4 tracking-wide">
											{pillar.title}
										</h3>

										<p className="text-[14px] leading-relaxed text-[#6A6A6A] font-light">
											{pillar.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom Divider */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-center mt-20"
				>
					<p className="text-[14px] text-[#6A6A6A] font-light mb-8">
						Every pillar is non-negotiable. Every variable is controlled.
					</p>
					<div className="w-16 h-px bg-[#C9A96E]/20 mx-auto" />
				</motion.div>
			</div>
		</section>
	);
}

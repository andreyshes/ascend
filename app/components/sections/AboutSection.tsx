"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	// Adjusted margin and amount to ensure the animation triggers reliably
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			id="about"
			ref={ref}
			className="relative py-32 md:py-44 overflow-hidden bg-[#0A0A0A]"
		>
			{/* Accent line */}
			<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A96E]/20 to-transparent z-10" />

			{/* Main Content Container - Added z-10 to lift it above the background image */}
			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
				<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
					{/* Main Image Column */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="relative"
					>
						<div className="relative aspect-[3/4] overflow-hidden group">
							<Image
								src="/ascend2.0.jpg"
								alt="Elite personal fitness coaching and physique transformation"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								className="object-cover object-top scale-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
								priority={false}
							/>

							{/* Overlays for the secondary image */}
							<div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-700" />
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

							{/* Decorative inner borders */}
							<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A96E]/20 pointer-events-none" />
							<div className="absolute -top-6 -left-6 w-24 h-24 border border-[#2D2D2D] pointer-events-none" />
						</div>

						{/* Duplicate borders for the outer container effect */}
						<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C9A96E]/20" />
						<div className="absolute -top-6 -left-6 w-24 h-24 border border-[#2D2D2D]" />
					</motion.div>

					{/* Text Content Column */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
						transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
					>
						<span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]/80 mb-6 block">
							About ASCEND
						</span>

						<h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-[#E8E4DE] mb-8 leading-tight">
							The Standard
							<br />
							Is Higher.
						</h2>

						<div className="w-16 h-px bg-[#C9A96E]/40 mb-8" />

						<div className="space-y-6 text-[15px] leading-relaxed text-[#8A8A8A] font-light">
							<p>
								ASCEND was built on a simple belief: most individuals never
								reach their true physical potential. Not because of genetics.
								Not because of time. But because they lack a structured, elite
								training system.
							</p>

							<p>
								This is not a generic workout plan. This is a
								precision-engineered personal fitness coaching system designed
								for high-performing individuals seeking measurable physique
								transformation, strength development, and long-term discipline.
							</p>

							<p>
								With over a decade of experience as a professional strength and
								physique coach, ASCEND exists for those who demand elite
								performance — and refuse average results.
							</p>
						</div>

						{/* Stats Section */}
						<div className="mt-10 flex flex-wrap items-center gap-6 md:gap-8">
							<div>
								<span className="text-3xl font-extralight text-[#C9A96E]">
									500+
								</span>
								<p className="text-[11px] tracking-[0.2em] uppercase text-[#6A6A6A] mt-1">
									Transformations
								</p>
							</div>

							<div className="hidden sm:block w-px h-12 bg-[#2D2D2D]" />

							<div>
								<span className="text-3xl font-extralight text-[#C9A96E]">
									12+
								</span>
								<p className="text-[11px] tracking-[0.2em] uppercase text-[#6A6A6A] mt-1">
									Years Coaching
								</p>
							</div>

							<div className="hidden sm:block w-px h-12 bg-[#2D2D2D]" />

							<div>
								<span className="text-3xl font-extralight text-[#C9A96E]">
									98%
								</span>
								<p className="text-[11px] tracking-[0.2em] uppercase text-[#6A6A6A] mt-1">
									Client Retention
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

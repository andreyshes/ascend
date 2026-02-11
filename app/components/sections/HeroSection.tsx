"use client";

import { useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
	const containerRef = useRef(null);

	// Create a parallax and zoom-out effect
	const { scrollY } = useScroll();
	const y = useTransform(scrollY, [0, 500], [0, 150]);
	const scale = useTransform(scrollY, [0, 500], [1.1, 1]);

	const scrollTo = useCallback((href: string) => {
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<section
			ref={containerRef}
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
		>
			{/* Background Layer */}
			<motion.div
				style={{ y, scale }}
				initial={{ scale: 1.2, opacity: 0 }}
				animate={{ scale: 1.1, opacity: 1 }}
				transition={{ duration: 1.8, ease: "easeOut" }}
				className="absolute inset-0 z-0"
			>
				<Image
					src="/hero.jpg"
					alt="Elite strength training"
					fill
					priority
					sizes="100vw"
					className="object-cover object-center brightness-[0.8] contrast-[1.1]"
				/>
			</motion.div>

			{/* Depth Overlays */}
			<div className="absolute inset-0 z-[1] pointer-events-none">
				{/* 1. Cinematic Spotlight - Creates a tunnel vision effect */}
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#0A0A0A_100%)] opacity-80" />

				{/* 2. Vertical Gradient - Grounds the buttons and navigation */}
				<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]" />

				{/* 3. Noise/Grain Texture - Adds physical "air" to the image */}
				<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="mb-6"
				>
					<span className="text-[10px] sm:text-[11px] tracking-[0.5em] uppercase text-[#C9A96E]">
						The Standard of Excellence
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, filter: "blur(10px)" }}
					animate={{ opacity: 1, filter: "blur(0px)" }}
					transition={{ duration: 1.5, delay: 0.5 }}
					className="text-7xl sm:text-9xl font-extralight tracking-[0.3em] text-[#E8E4DE] mb-8"
				>
					ASCEND
				</motion.h1>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 1.2 }}
				>
					<p className="text-base sm:text-lg tracking-[0.2em] font-light text-[#A1A1A1] mb-4 max-w-2xl mx-auto uppercase">
						Build Strength. Master Discipline.
					</p>

					<p className="text-sm font-light text-[#6A6A6A] mb-14 max-w-lg mx-auto leading-relaxed italic">
						"A private coaching system built for those who refuse average."
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1.5 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-6"
				>
					<button
						onClick={() => scrollTo("#apply")}
						className="group relative px-12 py-4 bg-[#C9A96E] text-[#0A0A0A] text-[11px] tracking-[0.2em] uppercase font-bold overflow-hidden transition-all"
					>
						<span className="relative z-10">Apply for Coaching</span>
						<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
					</button>

					<button
						onClick={() => scrollTo("#programs")}
						className="px-12 py-4 border border-white/10 text-[#8A8A8A] text-[11px] tracking-[0.2em] uppercase font-medium hover:border-[#C9A96E]/50 hover:text-white transition-all duration-500"
					>
						View Programs
					</button>
				</motion.div>
			</div>

			{/* Animated Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2.5 }}
				className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
			>
				<span className="text-[9px] tracking-[0.3em] uppercase text-[#4A4A4A]">
					Scroll
				</span>
				<motion.div
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
				>
					<ChevronDown size={16} className="text-[#C9A96E]/60" />
				</motion.div>
			</motion.div>
		</section>
	);
}

"use client";

import { useCallback } from "react";

export default function FooterSection() {
	const scrollTo = useCallback((href: string) => {
		const el = document.querySelector(href);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const navigationLinks = [
		{ label: "About", href: "#about" },
		{ label: "Programs", href: "#programs" },
		{ label: "Results", href: "#results" },
		{ label: "Method", href: "#method" },
		{ label: "Apply", href: "#apply" },
	];

	const programLinks = [
		"1:1 Coaching",
		"Online Transformation",
		"Strength & Physique",
		"Performance Systems",
	];

	return (
		<footer className="relative border-t border-[#1A1A1A]">
			<div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
				{/* Top Grid */}
				<div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-16">
					{/* Brand */}
					<div className="md:col-span-2">
						<span className="text-lg tracking-[0.35em] font-light text-[#E8E4DE] mb-6 block">
							ASCEND
						</span>

						<p className="text-[13px] leading-relaxed text-[#6A6A6A] font-light max-w-md">
							ASCEND is a premium personal training and online coaching system
							dedicated to elite fitness transformation, strength development,
							and physique coaching. As a leading personal fitness coach, ASCEND
							delivers structured, science-driven programs for body
							transformation and performance optimization.
						</p>
					</div>

					{/* Navigation */}
					<nav>
						<span className="text-[11px] tracking-[0.25em] uppercase text-[#4A4A4A] mb-6 block">
							Navigate
						</span>

						<ul className="space-y-3">
							{navigationLinks.map((link) => (
								<li key={link.label}>
									<button
										onClick={() => scrollTo(link.href)}
										className="text-[13px] text-[#6A6A6A] hover:text-[#C9A96E] transition-colors duration-300 font-light"
									>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</nav>

					{/* Programs */}
					<nav>
						<span className="text-[11px] tracking-[0.25em] uppercase text-[#4A4A4A] mb-6 block">
							Programs
						</span>

						<ul className="space-y-3">
							{programLinks.map((item) => (
								<li key={item}>
									<button
										onClick={() => scrollTo("#programs")}
										className="text-[13px] text-[#6A6A6A] hover:text-[#C9A96E] transition-colors duration-300 font-light"
									>
										{item}
									</button>
								</li>
							))}
						</ul>
					</nav>
				</div>

				{/* SEO Paragraph */}
				<div className="border-t border-[#1A1A1A] pt-10 mb-10">
					<p className="text-[12px] leading-relaxed text-[#3A3A3A] font-light max-w-4xl">
						ASCEND provides elite personal fitness coaching, online fitness
						coaching programs, and comprehensive strength training systems.
						Specializing in body transformation coaching, physique optimization,
						and performance training, ASCEND serves as your dedicated online
						personal trainer and strength coach.
					</p>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-[11px] text-[#3A3A3A] font-light tracking-widest">
						&copy; {new Date().getFullYear()} ASCEND. All rights reserved.
					</p>

					<div className="flex items-center gap-6">
						<span className="text-[11px] text-[#3A3A3A] font-light cursor-pointer">
							Privacy Policy
						</span>
						<span className="text-[11px] text-[#3A3A3A] font-light cursor-pointer">
							Terms of Service
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

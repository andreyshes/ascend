"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

type Transformation = {
	before: string;
	after: string;
	name: string;
	duration: string;
	stat: string;
};

type Testimonial = {
	quote: string;
	name: string;
	title: string;
	duration: string;
};

const transformations: Transformation[] = [
	{
		before:
			"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
		after:
			"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",
		name: "Marcus R.",
		duration: "16 Weeks",
		stat: "-28 lbs / +12% strength",
	},
	{
		before:
			"https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400&q=80",
		after:
			"https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
		name: "James T.",
		duration: "24 Weeks",
		stat: "Complete physique rebuild",
	},
	{
		before:
			"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
		after:
			"https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&q=80",
		name: "Daniel K.",
		duration: "12 Weeks",
		stat: "-22 lbs / peak condition",
	},
];

const testimonials: Testimonial[] = [
	{
		quote:
			"ASCEND fundamentally changed how I approach training and discipline. This is engineering a better version of yourself.",
		name: "Michael S.",
		title: "CEO, Tech Company",
		duration: "6-month client",
	},
	{
		quote:
			"I spent years with trainers who gave workouts. ASCEND gave me a system. The difference is everything.",
		name: "Adrian W.",
		title: "Attorney",
		duration: "12-month client",
	},
	{
		quote:
			"The precision is unmatched. Every variable is accounted for. Every week builds on the last.",
		name: "Thomas L.",
		title: "Entrepreneur",
		duration: "Ongoing client",
	},
];

export default function ResultsSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section id="results" ref={ref} className="relative py-32 md:py-44">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-20"
				>
					<span className="text-[11px] tracking-[0.4em] uppercase text-[#C9A96E]/80 mb-6 block">
						Proven Results
					</span>

					<h2 className="text-4xl md:text-5xl font-extralight tracking-wide text-[#E8E4DE] mb-6">
						Transformation Defined
					</h2>

					<p className="text-[15px] text-[#6A6A6A] font-light max-w-xl mx-auto">
						Real clients. Real protocols. Measurable transformations through
						elite personal training.
					</p>
				</motion.div>

				{/* Transformations */}
				<div className="grid md:grid-cols-3 gap-8 mb-32">
					{transformations.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: index * 0.15 }}
							className="group"
						>
							<div className="relative aspect-4/5 overflow-hidden mb-6">
								<div className="absolute inset-0 flex">
									{/* Before */}
									<div className="relative w-1/2">
										<Image
											src={item.before}
											alt={`Before transformation - ${item.name}`}
											fill
											sizes="(max-width: 768px) 50vw, 33vw"
											className="object-cover grayscale"
										/>
										<div className="absolute top-4 left-4 text-[9px] tracking-[0.2em] uppercase text-[#6A6A6A] bg-[#0A0A0A]/80 px-2 py-1">
											Before
										</div>
									</div>

									<div className="w-px bg-[#C9A96E]/30" />

									{/* After */}
									<div className="relative w-1/2">
										<Image
											src={item.after}
											alt={`After transformation - ${item.name}`}
											fill
											sizes="(max-width: 768px) 50vw, 33vw"
											className="object-cover"
										/>
										<div className="absolute top-4 right-4 text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] bg-[#0A0A0A]/80 px-2 py-1">
											After
										</div>
									</div>
								</div>
							</div>

							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-[15px] text-[#E8E4DE] font-light">
										{item.name}
									</span>
									<span className="text-[11px] tracking-[0.15em] text-[#C9A96E]/80">
										{item.duration}
									</span>
								</div>
								<p className="text-[13px] text-[#6A6A6A] font-light">
									{item.stat}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Testimonials */}
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((item, index) => (
						<motion.div
							key={item.name}
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
							className="relative p-8 md:p-10 border border-[#1A1A1A] hover:border-[#C9A96E]/10 transition-colors duration-700"
						>
							<Quote size={20} className="text-[#C9A96E]/20 mb-6" />

							<blockquote className="text-[15px] leading-relaxed text-[#8A8A8A] font-light italic mb-8">
								“{item.quote}”
							</blockquote>

							<div>
								<p className="text-[14px] text-[#E8E4DE] font-light">
									{item.name}
								</p>
								<p className="text-[12px] text-[#6A6A6A] mt-1">{item.title}</p>
								<p className="text-[11px] tracking-[0.15em] text-[#C9A96E]/60 mt-2 uppercase">
									{item.duration}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

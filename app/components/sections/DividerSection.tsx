"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

type DividerSectionProps = {
	quote: string;
	author?: string;
};

export default function DividerSection({ quote, author }: DividerSectionProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section ref={ref} className="relative py-24 md:py-36 overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0 -z-10">
				<Image
					src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&q=80"
					alt="Elite strength training environment"
					fill
					priority={false}
					sizes="100vw"
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-[#0A0A0A]/85" />
			</div>

			<div className="relative max-w-4xl mx-auto px-6 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 1 }}
				>
					<div className="w-12 h-px bg-[#C9A96E]/40 mx-auto mb-10" />

					<blockquote className="text-2xl md:text-3xl lg:text-4xl font-extralight text-[#E8E4DE] leading-relaxed tracking-wide italic">
						“{quote}”
					</blockquote>

					{author && (
						<p className="text-[12px] tracking-[0.3em] uppercase text-[#C9A96E]/60 mt-8">
							{author}
						</p>
					)}

					<div className="w-12 h-px bg-[#C9A96E]/40 mx-auto mt-10" />
				</motion.div>
			</div>
		</section>
	);
}

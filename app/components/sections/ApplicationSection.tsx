"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";

type FormState = {
	full_name: string;
	email: string;
	goal: string;
	experience_level: string;
	commitment_level: string;
	message: string;
};

export default function ApplicationSection() {
	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const [form, setForm] = useState<FormState>({
		full_name: "",
		email: "",
		goal: "physique_transformation",
		experience_level: "intermediate",
		commitment_level: "high",
		message: "",
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (field: keyof FormState, value: string) => {
		setForm((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);
		setError(null);

		try {
			const res = await fetch("/api/apply", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (!res.ok) throw new Error("Submission failed.");

			setSubmitted(true);
		} catch (err) {
			setError("An error occurred. Please contact support@ascend.com");
		} finally {
			setSubmitting(false);
		}
	};

	const inputStyles =
		"w-full bg-[#111111] border border-white/5 text-[#E8E4DE] px-4 py-3 text-sm focus:border-[#C9A96E]/40 outline-none transition-colors duration-300 placeholder:text-white/10";
	const labelStyles =
		"block text-[10px] uppercase tracking-[0.2em] text-[#6A6A6A] mb-2 font-medium";

	return (
		<section
			id="apply"
			ref={ref}
			className="relative py-32 md:py-48 bg-[#0A0A0A]"
		>
			<div className="max-w-4xl mx-auto px-6">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					className="text-center mb-20"
				>
					<span className="text-[11px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4 block">
						Enrollment
					</span>
					<h2 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-6 text-[#E8E4DE]">
						Apply for <span className="italic">Admission</span>
					</h2>
					<p className="text-[#8A8A8A] font-light max-w-lg mx-auto leading-relaxed">
						Coaching is strictly limited. We review every application to ensure
						alignment with our performance standards.
					</p>
				</motion.div>

				<AnimatePresence mode="wait">
					{submitted ? (
						<motion.div
							key="success"
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							className="text-center py-20 bg-[#0D0D0D] border border-white/5"
						>
							<CheckCircle2
								size={48}
								className="text-[#C9A96E] mx-auto mb-6 font-light"
								strokeWidth={1}
							/>
							<h3 className="text-2xl font-light text-[#E8E4DE] mb-4 tracking-tight uppercase">
								Transmission Received
							</h3>
							<p className="text-[#6A6A6A] font-light max-w-xs mx-auto">
								Your application is being processed. Expect a response within 48
								hours.
							</p>
						</motion.div>
					) : (
						<motion.form
							key="form"
							onSubmit={handleSubmit}
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : {}}
							className="grid grid-cols-1 md:grid-cols-2 gap-8"
						>
							{/* Left Column */}
							<div className="space-y-6">
								<div>
									<label className={labelStyles}>Full Name</label>
									<input
										required
										value={form.full_name}
										onChange={(e) => handleChange("full_name", e.target.value)}
										className={inputStyles}
										placeholder="First & Last Name"
									/>
								</div>
								<div>
									<label className={labelStyles}>Email Address</label>
									<input
										required
										type="email"
										value={form.email}
										onChange={(e) => handleChange("email", e.target.value)}
										className={inputStyles}
										placeholder="name@domain.com"
									/>
								</div>
								<div>
									<label className={labelStyles}>Primary Goal</label>
									<select
										value={form.goal}
										onChange={(e) => handleChange("goal", e.target.value)}
										className={inputStyles}
									>
										<option value="physique_transformation">
											Physique Transformation
										</option>
										<option value="strength_performance">
											Strength & Performance
										</option>
										<option value="elite_lifestyle">
											Elite Lifestyle Optimization
										</option>
									</select>
								</div>
							</div>

							{/* Right Column */}
							<div className="space-y-6">
								<div>
									<label className={labelStyles}>Experience Level</label>
									<select
										value={form.experience_level}
										onChange={(e) =>
											handleChange("experience_level", e.target.value)
										}
										className={inputStyles}
									>
										<option value="beginner">Beginner (0-1 Years)</option>
										<option value="intermediate">
											Intermediate (1-3 Years)
										</option>
										<option value="advanced">Advanced (3+ Years)</option>
									</select>
								</div>
								<div>
									<label className={labelStyles}>Commitment Capacity</label>
									<select
										value={form.commitment_level}
										onChange={(e) =>
											handleChange("commitment_level", e.target.value)
										}
										className={inputStyles}
									>
										<option value="high">High (4-6 Days/Week)</option>
										<option value="moderate">Moderate (3-4 Days/Week)</option>
									</select>
								</div>
								<div>
									<label className={labelStyles}>Message / Context</label>
									<textarea
										rows={1}
										value={form.message}
										onChange={(e) => handleChange("message", e.target.value)}
										className={`${inputStyles} resize-none`}
										placeholder="Current struggles or specific objectives..."
									/>
								</div>
							</div>

							{/* Full Width Bottom */}
							<div className="md:col-span-2 pt-6">
								{error && (
									<p className="text-red-500 text-[10px] uppercase tracking-widest mb-4">
										{error}
									</p>
								)}

								<button
									type="submit"
									disabled={submitting}
									className="w-full group relative py-5 bg-[#C9A96E] text-[#0A0A0A] text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all duration-700 disabled:opacity-50 flex items-center justify-center gap-4 overflow-hidden"
								>
									<span className="relative z-10 flex items-center gap-3">
										{submitting ? (
											<Loader2 size={16} className="animate-spin" />
										) : (
											"Submit Application"
										)}
										{!submitting && (
											<ArrowRight
												size={14}
												className="group-hover:translate-x-1 transition-transform"
											/>
										)}
									</span>
								</button>
							</div>
						</motion.form>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}

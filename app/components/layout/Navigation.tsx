"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type NavLink = {
	label: string;
	href: string;
};

const navLinks: NavLink[] = [
	{ label: "About", href: "/#about" },
	{ label: "Programs", href: "/#programs" },
	{ label: "Results", href: "/#results" },
	{ label: "Method", href: "/#method" },
	{ label: "Apply", href: "/#apply" },
];

export default function Navigation() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const pathname = usePathname();
	const router = useRouter();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 60);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	/**
	 * Smart Navigation Handler
	 */
	const handleNav = useCallback(
		(e: React.MouseEvent, href: string) => {
			setMobileOpen(false);

			// If the link is an anchor on the current page
			if (href.startsWith("/#") && pathname === "/") {
				e.preventDefault();
				const targetId = href.replace("/#", "");
				const el = document.getElementById(targetId);
				if (el) {
					el.scrollIntoView({ behavior: "smooth" });
					// Update URL without refresh
					window.history.pushState({}, "", href);
				}
			}
			// Otherwise, let the default Link behavior take them to the new page/home section
		},
		[pathname],
	);

	return (
		<>
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
					scrolled || mobileOpen
						? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-4"
						: "bg-transparent py-6"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-12">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link
							href="/"
							onClick={(e) => handleNav(e, "/#hero")}
							className="relative z-[60] group"
						>
							<span className="text-xl tracking-[0.4em] font-light text-[#E8E4DE] group-hover:text-[#C9A96E] transition-colors duration-500">
								ASCEND
							</span>
						</Link>

						{/* Desktop Links */}
						<div className="hidden md:flex items-center gap-12">
							{navLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									onClick={(e) => handleNav(e, link.href)}
									className="relative text-[10px] tracking-[0.25em] uppercase text-[#8A8A8A] hover:text-[#E8E4DE] transition-colors duration-300 group"
								>
									{link.label}
									<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />
								</Link>
							))}
						</div>

						{/* Desktop CTA */}
						<Link
							href="/#apply"
							onClick={(e) => handleNav(e, "/#apply")}
							className="hidden md:block text-[10px] tracking-[0.2em] uppercase px-8 py-3 border border-white/10 text-[#E8E4DE] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-500"
						>
							Apply Now
						</Link>

						{/* Mobile Toggle */}
						<button
							onClick={() => setMobileOpen(!mobileOpen)}
							className="md:hidden relative z-[60] text-[#E8E4DE] p-2"
							aria-label="Toggle Menu"
						>
							{mobileOpen ? (
								<X size={20} strokeWidth={1.5} />
							) : (
								<Menu size={20} strokeWidth={1.5} />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Overlay */}
			<AnimatePresence>
				{mobileOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
						className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col items-center justify-center gap-10"
					>
						<div className="flex flex-col items-center gap-8">
							{navLinks.map((link, i) => (
								<motion.div
									key={link.label}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 + i * 0.05 }}
								>
									<Link
										href={link.href}
										onClick={(e) => handleNav(e, link.href)}
										className="text-xl tracking-[0.3em] uppercase text-[#8A8A8A] hover:text-[#C9A96E] transition-colors"
									>
										{link.label}
									</Link>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.4 }}
							className="mt-8"
						>
							<Link
								href="/#apply"
								onClick={(e) => handleNav(e, "/#apply")}
								className="text-[11px] tracking-[0.3em] uppercase px-12 py-4 bg-[#C9A96E] text-[#0A0A0A] font-bold shadow-2xl"
							>
								Apply Now
							</Link>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/app/components/layout/Navigation";
import FooterSection from "@/app/components/layout/FooterSection";

export const metadata: Metadata = {
	title: "ASCEND | Elite Personal Fitness Coaching",
	description:
		"ASCEND is a premium personal fitness coaching system delivering elite physique transformation, strength training, and performance optimization.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-[#0A0A0A] text-[#E8E4DE] antialiased">
				<Navigation />
				{children}
				<FooterSection />
			</body>
		</html>
	);
}

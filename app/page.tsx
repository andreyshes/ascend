import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import DividerSection from "@/app/components/sections/DividerSection";
import ProgramsSection from "@/app/components/sections/ProgramsSection";
import ResultsSection from "@/app/components/sections/ResultsSection";
import MethodSection from "@/app/components/sections/MethodSection";
import ApplicationSection from "@/app/components/sections/ApplicationSection";

export default function HomePage() {
	return (
		<main className="bg-[#0A0A0A]">
			<HeroSection />

			<AboutSection />

			<DividerSection quote="Discipline is choosing between what you want now and what you want most." />

			<ProgramsSection />

			<ResultsSection />

			<DividerSection quote="The body achieves what the mind believes. The system ensures it happens." />

			<MethodSection />

			<ApplicationSection />
		</main>
	);
}

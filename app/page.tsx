import PageLoader from "@/app/components/pageloader";
import HomeSection from "@/app/components/home"; 
import SkillSection from "@/app/components/skill";
import ExperienceSection from "./components/experience";
import SertifikatSection from "@/app/components/sertifikat";
import { BackgroundBeams } from "@/components/ui/background-beams";
import ProjectSection from "./components/project";
import AboutSection from "./components/about";
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <BackgroundBeams />
      </div>
      <PageLoader />
      <main className="relative z-10">
        {/* HOME */}
        <HomeSection />

        {/* SKILL */}
        <SkillSection />

        {/* EXPERIENCE */}
        <ExperienceSection />

        {/* PROJECT */}
        <ProjectSection/>

        {/* SERTIFIKAT */}
        <SertifikatSection/>

        {/* ABOUT */}
        <AboutSection/>
      </main>
    </div>
  );
}

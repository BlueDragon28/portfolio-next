import Layout from "@/components/layout";
import Card from "@/components/card";
import HeaderCard from "@/components/header-card";
import ProfileInfo from "@/components/profile-info";
import IntroductionText from "@/components/introduction-text";
import ProgrammingLanguagesSkillSection from "@/components/programming-languages-skills";
import FrameworksSkillSection from "@/components/framework-skills-list";
import FooterCard from "@/components/footer-card";
import GameSortingWebApplication from "@/components/projects/gamesorting_webapp";
import SimpleAudioPlayer from "@/components/projects/simple-audio-player";
import SimpleAudioLibrary from "@/components/projects/simple-audio-library";
import ServeurSkillsSection from "@/components/serveur-skills";
import GpuPassthrough from "@/components/projects/gpu_passthrough";

export default function Home() {
  return (
    <Layout currentPath="/">
      <Card className="sm:my-4">
        <ProfileInfo />
        <div className="mt-10">
          <hr 
            className="border-gray-400 sm:border-none"
          ></hr>
          <IntroductionText />
        </div>
      </Card>
      <HeaderCard title="Compétences">
        <ServeurSkillsSection />
        <ProgrammingLanguagesSkillSection />
        <FrameworksSkillSection />
      </HeaderCard>
      <div className="mb-0 sm:mb-4"></div>
      <HeaderCard title="Projets Réalisés">
        <GpuPassthrough />
        <GameSortingWebApplication />
        <SimpleAudioPlayer />
        <SimpleAudioLibrary />
      </HeaderCard>
      <div className="mb-0 sm:mb-2"></div>
    </Layout>
  );
}


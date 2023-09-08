import Layout from "@/components/layout";
import Card from "@/components/card";
import HeaderCard from "@/components/header-card";
import ProfileInfo from "@/components/profile-info";
import IntroductionText from "@/components/introduction-text";
import ProgrammingLanguagesSkillSection from "@/components/programming-languages-skills";
import FrameworksSkillSection from "@/components/framework-skills-list";
import ProjectCardItem from "@/components/project-card-item";
import Anchor from "@/components/anchor";
import FooterCard from "@/components/footer-card";

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
        <ProgrammingLanguagesSkillSection />
        <FrameworksSkillSection />
      </HeaderCard>
      <div className="mb-0 sm:mb-4"></div>
      <HeaderCard title="Projets Réalisés">
        <ProjectCardItem 
          title="GameSorting Web Application"
          image={{
            url: "/images/projects/gamesorting_webapp.jpg",
            alt: "GameSorting WebApp"
          }}
        >
          <p className="my-2">Licence: MIT</p>
          <p className="my-2">Link: <Anchor url="https://gamesorting.bluedragon28.com/">gamesorting.bluedragon28.com</Anchor></p>
          <p className="my-2">Source: <Anchor url="https://github.com/BlueDragon28/gamesorting_webapp">github.com</Anchor></p>
        </ProjectCardItem>
        <ProjectCardItem
          className="mt-2"
          title="Simple Audio Player"
          image={{
            url: "/images/projects/simple-audio-player.jpg",
            alt: "Simple Audio Player",
          }}
        >
          <p className="my-2">Licence: MIT</p>
          <p className="my-2">Source: <Anchor url="https://github.com/BlueDragon28/simple-audio-player">github.com</Anchor></p>
        </ProjectCardItem>
        <ProjectCardItem
          className="mt-2"
          title="Simple Audio Library"
          image={{
            url: "/images/projects/simple-audio-library.jpg",
            alt: "Simple Audio Library",
          }}
        >
          <p className="my-2">Licence: MIT</p>
          <p className="my-2">Source: <Anchor url="https://github.com/BlueDragon28/simple-audio-library">github.com</Anchor></p>
        </ProjectCardItem>
      </HeaderCard>
      <div className="mb-0 sm:mb-2"></div>
      <FooterCard />
    </Layout>
  );
}


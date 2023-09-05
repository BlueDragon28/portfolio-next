import Layout from "@/components/layout";
import Card from "@/components/card";
import HeaderCard from "@/components/header-card";
import ProfileInfo from "@/components/profile-info";
import IntroductionText from "@/components/introduction-text";
import ProgrammingLanguagesSkillSection from "@/components/programming-languages-skills";
import FrameworksSkillSection from "@/components/framework-skills-list";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}

import Layout from "@/components/layout";
import Card from "@/components/card";
import HeaderCard from "@/components/header-card";
import ProfileInfo from "@/components/profile-info";
import IntroductionText from "@/components/introduction-text";
import SkillIcon from "@/components/skill-icon";

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
        <div>
          <h3 className="text-xl font-bold">
            Langages de Programmation
          </h3>
          <div>
            <SkillIcon 
              name="JavaScript"
              url="/images/techs/javascript.png"
            />
          </div>
        </div>
      </HeaderCard>
    </Layout>
  );
}

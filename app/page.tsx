import Layout from "@/components/layout";
import Card from "@/components/card";
import ProfileInfo from "@/components/profile-info";
import IntroductionText from "@/components/introduction-text";

export default function Home() {
  return (
    <Layout>
      <Card className="my-4">
        <ProfileInfo />
        <div className="mt-10">
          <hr 
            className="border-gray-400 sm:border-none"
          ></hr>
          <IntroductionText />
        </div>
      </Card>
    </Layout>
  );
}

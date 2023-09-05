import Layout from "@/components/layout";
import Card from "@/components/card";
import OutlinedLink from "@/components/outlined-link";
import ProfileInfo from "@/components/profile-info";

export default function Home() {
  return (
    <Layout>
      <Card className="my-4">
        <ProfileInfo />
      </Card>
    </Layout>
  );
}

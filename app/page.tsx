import Image from "next/image";
import Layout from "@/components/layout";
import Card from "@/components/card";

export default function Home() {
  return (
    <Layout>
      <Card className="my-4">
        <div className="flex flex-row justify-between">
          <Image 
            className="block rounded"
            src="/images/profile.jpg" 
            alt="Profile picture" 
            width={300}
            height={300}
          />
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl">Erwan Saclier</h1>
            <div className="h-[1px] bg-gray-400 w-40"></div>
            <p>Alternance Développeur Full Stack</p>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

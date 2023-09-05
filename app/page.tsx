import Image from "next/image";
import Layout from "@/components/layout";
import Card from "@/components/card";
import OutlinedLink from "@/components/outlined-link";

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
          <div className="flex flex-col flex-grow justify-center items-center">
            <h1 className="font-bold text-4xl my-1">Erwan Saclier</h1>
            <div className="h-[1px] bg-gray-400 w-40 my-1"></div>
            <p className="my-1">Alternance Développeur Full Stack</p>
            <div className="flex flex-row justify-around w-[300px] my-1">
              <OutlinedLink href="#">Obtenir CV</OutlinedLink> 
              <OutlinedLink href="#">Contact</OutlinedLink>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

import Card from "@/components/card";
import PhoneIcon from "@/components/icons/phone";
import Layout from "@/components/layout";

export default function ContactPage() {
  return (
    <Layout currentPath="/contact">
      <Card className="sm:my-4">
        <h1 className="text-center font-bold text-3xl">Contactez-moi</h1>
        <p className="text-center">Vous pouvez me contacter par :</p>
        <div className="flex flex-row items-center justify-around mt-8">
          <div className="flex flex-col items-center">
            <PhoneIcon width="64px" height="64px" />
            <p className="mt-2">07 60 29 64 98</p>
          </div>
        </div>
      </Card>
    </Layout>
  );

}

import Layout from "@/components/layout";
import Card from "@/components/card";
import GameSortingWebApplication from "@/components/projects/gamesorting_webapp";
import SimpleAudioPlayer from "@/components/projects/simple-audio-player";
import SimpleAudioLibrary from "@/components/projects/simple-audio-library";
import GpuPassthrough from "@/components/projects/gpu_passthrough";

export default function ProjectsList() {
  return (
    <Layout currentPath="/projects">
      <Card className="sm:my-4">
        <GpuPassthrough />
        <GameSortingWebApplication />
        <SimpleAudioPlayer />
        <SimpleAudioLibrary />
      </Card>
    </Layout>
  );
}

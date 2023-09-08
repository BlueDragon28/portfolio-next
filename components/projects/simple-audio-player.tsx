import ProjectCardItem from "../project-card-item";
import Anchor from "../anchor";

export default function SimpleAudioPlayer() {
  return (
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
  );
}

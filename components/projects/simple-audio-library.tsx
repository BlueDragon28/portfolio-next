import ProjectCardItem from "../project-card-item";
import Anchor from "../anchor";

export default function SimpleAudioLibrary() {
  return (
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
      <p className="my-2">Permet de lire des fichiers audio. Cette bibliothèque est écrite en C++.</p>
    </ProjectCardItem>
  );
}

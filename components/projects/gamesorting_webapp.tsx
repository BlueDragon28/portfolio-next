import ProjectCardItem from "../project-card-item";
import Anchor from "../anchor";

export default function GameSortingWebApplication() {
  return (
    <ProjectCardItem 
      title="GameSorting Web Application"
      image={{
        url: "/images/projects/gamesorting_webapp.jpg",
        alt: "GameSorting WebApp"
      }}
    >
      <p className="my-2">Licence: MIT</p>
      <p className="my-2">Link: <Anchor url="https://gamesorting.bluedragon28.com/">gamesorting.bluedragon28.com</Anchor></p>
      <p className="my-2">Source: <Anchor url="https://github.com/BlueDragon28/gamesorting_webapp">github.com</Anchor></p>
    </ProjectCardItem>
  );
}

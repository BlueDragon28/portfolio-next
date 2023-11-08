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
      <p className="my-2">Développement et déploiement d'une application web pour la gestion de listes de souhaits. L'application est en train d'être complètement réécrite afin d'intégrer HTMX.</p>
    </ProjectCardItem>
  );
}

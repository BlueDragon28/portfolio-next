import ProjectCardItem from "../project-card-item";
import Anchor from "../anchor";

export default function GameSortingWebApplication() {
  return (
    <ProjectCardItem 
      className="mt-2"
      title="GameSorting Web Application"
      image={{
        url: "/images/projects/gamesorting_webapp.jpg",
        alt: "GameSorting WebApp"
      }}
    >
      <p className="my-2">Licence: MIT</p>
      <p className="my-2">Link: <Anchor url="https://gamesorting.bluedragon28.com/">gamesorting.bluedragon28.com</Anchor></p>
      <p className="my-2">Source: <Anchor url="https://github.com/BlueDragon28/gamesorting_webapp">github.com</Anchor></p>
      <p className="my-2">Développement et déploiement d&apos;une application web pour la gestion de listes de souhaits. L&apos;application est en train d&apos;être complètement réécrite afin d&apos;intégrer HTMX.</p>
    </ProjectCardItem>
  );
}

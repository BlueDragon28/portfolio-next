import ProjectCardItem from "../project-card-item";
import Anchor from "../anchor";

export default function GpuPassthrough() {
  return (
    <ProjectCardItem
      className="mt-2"
      title="Windows 10 Single GPU Passthrough"
      image={{
        url: "/images/projects/gpu_passthrough.jpg",
        alt: "GPU Passthrough Icon"
      }}
    >
      <p className="my-2">Configuration de Libvirt pour exécuter un script afin de déconnecter une carte graphique Radeon RX Vega 56 à chaud, dans le but de la lier au driver VFIO, ainsi que l&apos;attribution des différents coeurs de la machine virtuelle aux coeurs physiques du processeur. Installations et configurations des drivers nécessaires au bon fonctionnement de Windows.</p>
    </ProjectCardItem>
  );
}

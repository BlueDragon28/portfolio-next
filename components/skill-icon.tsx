import Image from "next/image";

export interface SkillIconProps {
  name: string,
  url: string,
}

export default function SkillIcon(
  { name, url }: SkillIconProps,
) {
  return (
    <div className="inline-flex flex-col justify-around items-center w-28">
      <Image 
        src={url}
        alt={name}
        width={64}
        height={64}
      />
      <p>{name}</p>
    </div>
  );
}

import { ReactNode } from "react";

export interface ProjectCardImageAttr {
  url: string,
  alt: string,
}

export interface ProjectCardItemProps {
  title: string,
  image: ProjectCardImageAttr,
  children: ReactNode,
}

export default function ProjectCardItem(
  { title, image, children }: ProjectCardItemProps
) {
  const { url, alt } = image;

  return (
    <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden bg-blue-800">
      <img 
        className="block w-[100%] sm:w-[330px] sm:me-4"
        src={url}
        alt={alt}
      />
      <div className="sm:mx-0 sm:my-2 m-4">
        <h3 className="text-2xl font-medium">{title}</h3>
        {children}
      </div>
    </div>
  );
}

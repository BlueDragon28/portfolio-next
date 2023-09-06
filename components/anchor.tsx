import { ReactNode } from "react";

export interface AnchorProps {
  url: string,
  children: ReactNode,
}

export default function Anchor(
  { url, children }: AnchorProps,
) {
  return (
    <a 
      className="text-blue-300 hover:text-blue-400 hover:underline underline-offset-4"
      href={url}
    >{children}</a>
  );
}

import React, { ReactNode } from "react";
import NavBar from "./navbar";

export interface LayoutProps {
  currentPath?: string,
  children: ReactNode,
}

export default function Layout(
  { currentPath, children }: LayoutProps,
) {
  return (
    <>
      <NavBar currentPath={currentPath}/>
      <main>{children}</main>
    </>
  );
}

import React, { ReactNode } from "react";
import NavBar from "./navbar";
import FooterCard from "./footer-card";

export interface LayoutProps {
  currentPath?: string,
  children: ReactNode,
}

export default function Layout(
  { currentPath, children }: LayoutProps,
) {
  return (
    <div className="h-[100vh] flex flex-col">
      <NavBar currentPath={currentPath}/>
      <main className="flex-grow">{children}</main>
      <FooterCard />
    </div>
  );
}

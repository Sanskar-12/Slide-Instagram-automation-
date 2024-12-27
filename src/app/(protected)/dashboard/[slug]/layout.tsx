import InfoBar from "@/components/global/info-bar";
import Sidebar from "@/components/global/sidebar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { slug: string };
}

const layout = ({ children, params }: LayoutProps) => {
  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      <div
        className="
      lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      "
      >
        {/* Navbar */}
        <InfoBar slug={params.slug} />
        {children}
      </div>
    </div>
  );
};

export default layout;

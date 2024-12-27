import Sidebar from "@/components/global/sidebar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { slug: string };
}

const layout = ({ children, params }: LayoutProps) => {
  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
    </div>
  );
};

export default layout;

import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const layout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default layout;

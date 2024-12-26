import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Spinner } from "./spinner";

interface LoaderProps {
  state: boolean;
  className?: string;
  children: ReactNode;
  color?: string;
}

const Loader = ({ state, className, children, color }: LoaderProps) => {
  return state ? (
    <div className={cn(className)}>
      <Spinner color={color} />
    </div>
  ) : (
    children
  );
};

export default Loader;

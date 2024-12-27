import {
  Sheet as ShadCnSheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface SheetProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side: "left" | "right";
}

const Sheet = ({ trigger, children, className, side }: SheetProps) => {
  return (
    <ShadCnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent side={side} className="p-0">
        {children}
      </SheetContent>
    </ShadCnSheet>
  );
};

export default Sheet;

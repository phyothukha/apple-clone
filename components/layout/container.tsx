import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto max-w-[1024px]", className)}>
      {children}
    </div>
  );
};

export default Container;

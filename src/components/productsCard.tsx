import { ReactNode } from "react";

interface productsCardProps {
  icon: ReactNode;
  content: string;
}

export function ProductsCard({ icon, content }: productsCardProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="bg-secondary p-7 rounded-md text-slate-100">{icon}</div>
        <span className="w-80 h-[2px] bg-primary  "></span>
      </div>
      <div className="text-base space-y-2">
        <p> {content} </p>
        <p> {content} </p>
      </div>
    </div>
  );
}

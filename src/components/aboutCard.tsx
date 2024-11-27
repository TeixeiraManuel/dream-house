import { ReactNode } from "react";
import iconAboutImg from "@/assets/iconAboutCard.png";
interface aboutCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  state: boolean;
}

export function AboutCard({ icon, title, description, state }: aboutCardProps) {
  return (
    <div
      data-aos="fade-right"
      className="hover:bg-secondary border-2 border-primary/10 p-4 rounded-md w-11/12 space-y-4 shadow-md cursor-pointer transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className=" bg-primary/25 hover:bg-slate-100 rounded-full p-4 text-primary">
          {icon}
        </div>
        {state && <img src={iconAboutImg} alt="" />}
      </div>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

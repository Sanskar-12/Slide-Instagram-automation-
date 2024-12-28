import { InstagramDuoToneBlue } from "@/icons";
import { ReactNode } from "react";

interface IntegrationsProps {
  title: string;
  icon: ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
}

export const INTEGRATIONS: IntegrationsProps[] = [
  {
    title: "Connect Instagram",
    description:
      "Seamlessly integrate your Instagram account to unlock personalized features and streamline your social media experience.",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
];

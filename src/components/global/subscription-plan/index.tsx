import { ReactNode } from "react";

interface SubscriptionPlanProps {
  type: "FREE" | "PRO";
  children: ReactNode;
}

const SubscriptionPlan = ({ type, children }: SubscriptionPlanProps) => {
  return children;
};

export default SubscriptionPlan;

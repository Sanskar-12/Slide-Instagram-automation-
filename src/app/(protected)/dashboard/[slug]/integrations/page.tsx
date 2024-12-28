import { INTEGRATIONS } from "@/constants/integrations";
import React from "react";
import IntegrationCard from "./_components/integration-card";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full lg:w-8/12 gap-y-5">
        {INTEGRATIONS.map((integration, key) => (
          <IntegrationCard key={key} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default page;

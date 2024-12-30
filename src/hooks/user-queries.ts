import { getAllUserAutomations } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllUserAutomations,
  });
};

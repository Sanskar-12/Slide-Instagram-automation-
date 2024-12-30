"use server";

import { client } from "@/lib/prisma";

export const getAutomations = async (clerkId: string) => {
  const automations = await client.user.findUnique({
    where: {
      clerkId,
    },
    select: {
      automations: {
        orderBy: {
          createdAt: "asc",
        },
        include: {
          keywords: true,
          listener: true,
        },
      },
    },
  });

  return automations;
};

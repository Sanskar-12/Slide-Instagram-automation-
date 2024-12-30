"use server";

import { client } from "@/lib/prisma";

export const updateIntegration = async (
  newRefreshToken: string,
  newExpiresAt: Date,
  id: string
) => {
  const updatedIntegration = await client.integrations.update({
    where: {
      id,
    },
    data: {
      token: newRefreshToken,
      expiresAt: newExpiresAt,
    },
  });

  return updatedIntegration;
};

"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations";

export const onCurrentUser = async () => {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();

  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();
        const timeLeft =
          found.integrations[0].expiresAt?.getTime()! - today.getTime();

        const days = Math.round(timeLeft / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("refresh");
          const newRefreshToken = await refreshToken(
            found.integrations[0].token
          );

          const today = new Date();

          const newExpiresAt = today.setDate(today.getDate() + 60);

          const updateToken = await updateIntegration(
            newRefreshToken.access_token,
            new Date(newExpiresAt),
            found.integrations[0].id
          );

          if (!updateToken) {
            console.log("Update Token Failed");
          }
        }
      }

      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }

    const newUser = await createUser(
      user.id,
      user.firstName as string,
      user.lastName as string,
      user.emailAddresses[0].emailAddress
    );

    return {
      status: 201,
      data: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

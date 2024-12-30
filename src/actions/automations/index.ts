"use server";

import { onCurrentUser } from "../user";
import { getAutomations } from "./queries";

export const getAllUserAutomations = async () => {
  const user = await onCurrentUser();

  try {
    const userAutomations = await getAutomations(user.id);

    if (userAutomations) {
      return {
        status: 200,
        data: userAutomations.automations,
      };
    }

    return {
      status: 404,
      data: [],
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      data: [],
    };
  }
};

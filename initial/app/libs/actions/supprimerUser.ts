"use server";

import { redirect } from "next/navigation";
import prisma from "../prismaClient";

export default async function supprimerUser(userId: string) {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  redirect("/dashboard/employe");
}

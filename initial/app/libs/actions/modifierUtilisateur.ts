"use server";

import { redirect } from "next/navigation";
import prisma from "../prismaClient";

export async function modifierUtilisateur(userId: string, formData: FormData) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user) {
    const nom = formData.get("name");
    const email = formData.get("email");

    await prisma.user
      .update({
        where: {
          id: userId,
        },
        data: {
          nom: nom as string,
          email: email as string,
        },
      })
      .then((res) => {
        redirect("/dashboard/employe");
      });
  }
}

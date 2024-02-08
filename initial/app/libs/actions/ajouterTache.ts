"use server";

import { Tache } from "@prisma/client";
import prisma from "../prismaClient";

export default async function ajouterTache(formData: FormData) {
  const tache = {
    titre: formData.get("titre") as string,
    description: formData.get("description") as string,
    userId: formData.get("userId") as string,
  } as Tache;

  try {
    await prisma.tache.create({
      data: tache,
    });

    return {
      status: "success",
      message: "Tache ajoutée avec succès",
    };
  } catch (error) {
    console.error(error);
    return {
      status: "error",
      message: "Erreur lors de l'ajout de la tache",
    };
  }
}

"use server";

import prisma from "../prismaClient";

export async function ajouterUtilisateur(formData: FormData) {
  const nom = formData.get("name");
  const email = formData.get("email");

  if (!nom || !email) {
    return {
      message: "Veuillez remplir tous les champs",
    };
  }
  //   prisma pour ajouter un utilisateur
  const user = {
    nom: nom as string,
    email: email as string,
  };

  try {
    const utilisateur = await prisma.user.create({
      data: user,
    });

    return {
      message: "Utilisateur ajouté avec succès",
      utilisateur,
    };
  } catch (error) {
    return {
      message: "Erreur lors de l'ajout de l'utilisateur",
      code: 500,
    };
  }
}

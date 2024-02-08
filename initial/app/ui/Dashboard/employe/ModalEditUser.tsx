import React from "react";
import { toast } from "sonner";
import ButtonValide from "./ButtonValide";

import { User } from "@prisma/client";
import prisma from "@/app/libs/prismaClient";
import { modifierUtilisateur } from "@/app/libs/actions/modifierUtilisateur";
import UpdateUserForm from "./UpdateUserForm";

type Props = {
  userId: string;
};

export default async function ModalEditUser({ userId = "" }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const modifierUtilisateurId = modifierUtilisateur.bind(null, userId);

  return (
    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box ">
        <h3 className="font-bold text-lg">Modifier un utilisateur</h3>
        <p>
          Veuillez remplir le formulaire ci-dessous pour modifier un
          utilisateur.
        </p>
        <UpdateUserForm
          user={user as User}
          modifierUtilisateurId={modifierUtilisateurId}
        />

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

"use client";

import { User } from "@prisma/client";
import React, { useRef } from "react";
import ButtonValide from "./ButtonValide";
import { toast } from "sonner";

type Props = {
  user: User;
  modifierUtilisateurId: (formData: FormData) => Promise<void>;
};

export default function UpdateUserForm({ modifierUtilisateurId, user }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="mt-2 flex flex-col gap-3"
      action={(data) =>
        modifierUtilisateurId(data).then((res) => {
          formRef.current?.reset();
          toast.success("Utilisateur modifié avec succès");
          // @ts-ignore
          document.getElementById("my_modal_6").close();
        })
      }
    >
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Nom de l'utilisateur</span>
        </div>
        <input
          type="text"
          placeholder="DrcMind"
          className="input input-bordered w-full "
          name="name"
          required
          defaultValue={user ? user.nom : ""}
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Email de l'utilisateur</span>
        </div>
        <input
          type="email"
          placeholder="test@gmail.com"
          className="input input-bordered w-full "
          name="email"
          required
          defaultValue={user ? user.email : ""}
        />
      </label>

      <ButtonValide label="Modifier " />
    </form>
  );
}

"use client";

import { User } from "@prisma/client";
import ButtonValide from "./employe/ButtonValide";
import ajouterTache from "@/app/libs/actions/ajouterTache";
import { toast } from "sonner";
import { useRef } from "react";

type Props = {
  users: User[];
};

export default function AjouterTacheForm({ users }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="mt-2 flex flex-col gap-3"
      action={(data) =>
        ajouterTache(data).then((res) => {
          if (res.status === "success") {
            toast.success(res.message);
            formRef.current?.reset();
            // @ts-ignore
            document.getElementById("my_modal_7").close();
          } else {
            toast.error(res.message);
          }
        })
      }
      ref={formRef}
    >
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Titre</span>
        </div>
        <input
          type="text"
          placeholder="Titre de la tâche"
          className="input input-bordered w-full "
          name="titre"
          required
        />
      </label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Description de la tâche"
        name="description"
        required
      ></textarea>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Affecter à :</span>
        </div>
        <select className="select select-bordered" name="userId">
          <option disabled selected>
            Selectionner un utilisateur
          </option>
          {users.map((user) => {
            return <option value={user.id}>{user.nom}</option>;
          })}
        </select>
      </label>

      <ButtonValide label="Ajouter une tache" />
    </form>
  );
}

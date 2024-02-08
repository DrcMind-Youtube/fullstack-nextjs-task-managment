import { ajouterUtilisateur } from "@/app/libs/actions/ajouterUtilisateur";
import React, { useRef } from "react";
import { toast } from "sonner";
import ButtonValide from "./ButtonValide";

type Props = {};

export default function ModalUser({}: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box ">
        <h3 className="font-bold text-lg">Ajouter un utilisateur</h3>
        <p>
          Veuillez remplir le formulaire ci-dessous pour ajouter un utilisateur.
        </p>

        <form
          ref={formRef}
          action={(data) =>
            ajouterUtilisateur(data).then((res) => {
              if (res.code) {
                toast.error(res.message);
              } else {
                toast.success(res.message);
                formRef.current?.reset();
                // Cache le modal
                // @ts-ignore
                document.getElementById("my_modal_5").close();
              }
            })
          }
          className="mt-2 flex flex-col gap-3"
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
            />
          </label>

          <ButtonValide label="Ajouter un utilisateur" />
        </form>
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

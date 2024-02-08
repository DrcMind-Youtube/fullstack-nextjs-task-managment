import AjouterTacheForm from "./AjouterTacheForm";
import ButtonValide from "./employe/ButtonValide";
import prisma from "@/app/libs/prismaClient";

type Props = {};

export default async function ModalTask({}: Props) {
  const users = await prisma.user.findMany();
  return (
    <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box max-w-xs">
        <h3 className="font-bold text-lg">Ajouter une tache</h3>
        <p>
          Veuillez remplir le formulaire ci-dessous pour ajouter un utilisateur.
        </p>

        <AjouterTacheForm users={users} />
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

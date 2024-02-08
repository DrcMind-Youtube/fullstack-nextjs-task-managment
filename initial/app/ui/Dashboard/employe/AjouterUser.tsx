"use client";
import React from "react";
import ModalUser from "./ModalUser";

type Props = {};

export default function AjouterUser({}: Props) {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-secondary"
        // @ts-ignore
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Ajouter un utilisateur
      </button>

      <ModalUser />
    </div>
  );
}

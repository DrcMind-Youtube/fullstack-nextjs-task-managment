"use client";

import React from "react";

type Props = {};

export default function AjouterTache({}: Props) {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-secondary"
        // @ts-ignore
        onClick={() => document.getElementById("my_modal_7").showModal()}
      >
        Ajouter une tâche
      </button>
    </div>
  );
}

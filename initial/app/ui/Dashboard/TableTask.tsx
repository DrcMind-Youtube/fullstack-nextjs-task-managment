import prisma from "@/app/libs/prismaClient";
import React from "react";
import ActionTache from "./ActionTache";
import Link from "next/link";

type Props = {};

export default async function TableTask({}: Props) {
  const taches = await prisma.tache.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Titre</th>

            <th>Date</th>
            <th>Utilisateur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {taches.map((tache, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>
                <Link href={`/dashboard/${tache.id}`} className="btn-link">
                  {" "}
                  {tache.titre}
                </Link>
              </td>
              <td>{new Date(tache.createdAt).toLocaleDateString()} </td>
              <td>{tache.user.nom}</td>
              <td>
                <ActionTache tache={tache} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

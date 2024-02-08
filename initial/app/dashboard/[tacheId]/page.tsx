import prisma from "@/app/libs/prismaClient";
import { User } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    tacheId: string;
  };
};

export default async function page({ params }: Props) {
  const tache = await prisma.tache.findUnique({
    where: {
      id: params.tacheId,
    },

    include: {
      user: true,
    },
  });

  if (!tache) {
    return notFound();
  }
  return (
    <main className="mx-3 rounded-md p-2 bg-secondary-content h-full mt-2 px-7">
      <h1 className="text-3xl font-bold mt-3">{tache.titre}</h1>

      <div className="flex">
        <div className="flex-1">
          <p className="text-sm text-gray-200 mt-2">{tache.description}</p>

          {/* Date */}
          <p className="text-sm text-gray-300 mt-5">
            {new Date(tache.createdAt).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
          </p>
        </div>
        <div className="flex-1 px-3">
          <h3 className="text-lg font-semibold text-secondary">
            Utilisateur assigné
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <div className="avatar">
              <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex justify-center items-center">
                <User size={20} />
              </div>
            </div>

            <p className=" text-white">{tache.user?.nom}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

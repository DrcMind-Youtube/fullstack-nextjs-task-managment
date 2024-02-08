import prisma from "@/app/libs/prismaClient";
import { Trash, UserCog } from "lucide-react";
import React from "react";
import ActionUser from "./ActionUser";
import ModalEditUser from "./ModalEditUser";

type Props = {
  userId: string;
};

export default async function ListeTravailleur({ userId }: Props) {
  const users = await prisma.user.findMany();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Nom </th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => (
            <tr className="bg-base-200">
              <th>{index + 1}</th>
              <td>{user.nom}</td>
              <td>{user.email}</td>
              <ActionUser user={user} />
            </tr>
          ))}
        </tbody>
      </table>

      <ModalEditUser userId={userId} />
    </div>
  );
}

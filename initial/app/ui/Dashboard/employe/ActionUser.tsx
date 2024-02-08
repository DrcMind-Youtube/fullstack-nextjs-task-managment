"use client";

import supprimerUser from "@/app/libs/actions/supprimerUser";
import { User } from "@prisma/client";
import { Trash, UserCog } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback } from "react";
import { toast } from "sonner";

type Props = {
  user: User;
};

export default function ActionUser({ user }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleDeleteUser = () => {
    setLoading(true);
    supprimerUser(user.id.toString()).then(() => {
      setLoading(false);
      toast.success("Utilisateur supprimé avec succès");
    });
  };
  return (
    <td className="flex items-center gap-3">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          router.push(
            `${pathname}?${createQueryString("id", user.id.toString())}`
          );
          //@ts-ignore
          document.getElementById("my_modal_6").showModal();
        }}
      >
        <UserCog size={20} className="text-white" />
      </button>
      <button className="btn btn-sm btn-accent" onClick={handleDeleteUser}>
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <Trash size={20} className="text-white" />
        )}
      </button>
    </td>
  );
}

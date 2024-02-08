"use client";

import supprimerUser from "@/app/libs/actions/supprimerUser";
import { Tache, User } from "@prisma/client";
import { Trash, UserCog } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useCallback } from "react";
import { toast } from "sonner";

type Props = {
  tache: Tache;
};

export default function ActionTache({ tache }: Props) {
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

  return (
    <td className="flex items-center gap-3">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          //@ts-ignore
          document.getElementById("my_modal_6").showModal();
        }}
      >
        <UserCog size={20} className="text-white" />
      </button>
      <button className="btn btn-sm btn-accent">
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <Trash size={20} className="text-white" />
        )}
      </button>
    </td>
  );
}

import LoadingTable from "@/app/ui/Dashboard/LoadingTable";
import AjouterUser from "@/app/ui/Dashboard/employe/AjouterUser";
import ListeTravailleur from "@/app/ui/Dashboard/employe/ListeTravailleur";
import React, { Suspense } from "react";

type Props = {
  searchParams: {
    id: string;
  };
};

export default function page({ searchParams }: Props) {
  return (
    <section className="mx-3 rounded-md p-2 bg-secondary-content h-full mt-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl  p-4 text-white font-bold">Employés</h1>
        <AjouterUser />
      </div>
      <div className="p-4 mt-2 ">
        <Suspense fallback={<LoadingTable />}>
          <ListeTravailleur userId={searchParams.id} />
        </Suspense>
      </div>
    </section>
  );
}

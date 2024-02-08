import React, { Suspense } from "react";
import TableTask from "../ui/Dashboard/TableTask";
import AjouterTache from "../ui/Dashboard/AjouterTache";
import ModalTask from "../ui/Dashboard/ModalTask";
import LoadingTable from "../ui/Dashboard/LoadingTable";

type Props = {};

export default function page({}: Props) {
  return (
    <section className="mx-3 rounded-md p-2 bg-secondary-content h-full mt-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl  p-4 text-white font-bold">Dashboard</h1>
        <AjouterTache />
      </div>
      <div className="p-4 mt-2">
        <Suspense fallback={<LoadingTable />}>
          <TableTask />
        </Suspense>
      </div>

      <ModalTask />
    </section>
  );
}

import React from "react";
import Navbar from "../ui/common/Navbar";
import Sidebar from "../ui/common/Sidebar";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 m-2">{children}</div>
      </div>
    </main>
  );
}

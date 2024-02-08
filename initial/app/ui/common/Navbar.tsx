import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar px-2 bg-base-200">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl font-bold">
          TaskApp 📝
        </Link>
      </div>
      <div className="flex-none  gap-2 pr-4">
        <UserButton afterSignOutUrl="/" showName={true} />
      </div>
    </div>
  );
}

export default Navbar;

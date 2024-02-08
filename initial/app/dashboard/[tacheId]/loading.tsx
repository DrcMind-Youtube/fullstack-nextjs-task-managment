import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="mx-3 rounded-md p-2 bg-secondary-content h-full mt-2 px-7">
      <div className="skeleton max-w-md h-9"></div>

      <div className="flex">
        <div className="flex-1">
          <div className="skeleton w-full h-52 mt-4"></div>

          {/* Date */}
          <p className="text-sm text-gray-300 mt-5">
            <div className="skeleton w-full h-5"></div>
          </p>
        </div>
        <div className="flex-1 px-3">
          <h3 className="text-lg font-semibold text-secondary">
            Utilisateur assigné
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <div className="avatar">
              <div className="skeleton w-12 h-12 rounded-full shrink-0"></div>
            </div>

            <p className=" text-white">
              <div className="skeleton w-20 h-4"></div>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import React from "react";
import { useFormStatus } from "react-dom";

type Props = {
  label: string;
};

export default function ButtonValide({ label }: Props) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" aria-disabled={pending} className="btn btn-primary">
      {label}
      {pending && <span className="loading loading-spinner loading-sm"></span>}
    </button>
  );
}

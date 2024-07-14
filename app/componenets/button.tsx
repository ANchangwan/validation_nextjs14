"use client";

import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="py-3 px-10 rounded-md bg-blue-500 text-2xl
      disabled:bg-neutral-400 
      disabled:text-white
     disabled:cursor-not-allowed
    "
      disabled={pending}
    >
      {pending ? "Loadding..." : text}
    </button>
  );
}

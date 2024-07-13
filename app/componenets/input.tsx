import { error } from "console";
import { Span } from "next/dist/trace";
import { InputHTMLAttributes } from "react";

interface ButtonProps {
  name: string;
  errors: string[];
}

export default function Input({
  name,
  errors,
  ...rest
}: ButtonProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-2">
      <input className="py-4 px-2 rounded-md" name={name} {...rest} />
      {errors.map((error, index) => (
        <span className="text-red-500 font-semibold">{error}</span>
      ))}
    </div>
  );
}

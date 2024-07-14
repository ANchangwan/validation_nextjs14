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
      <input
        className="py-4 px-2 rounded-md outline-none hover:outline-offset-2 hover:outline-blue-500 text-black 
        focus:outline-blue-500"
        name={name}
        {...rest}
      />
      {errors.map((error, index) => (
        <span className="text-red-500 font-semibold">{error}</span>
      ))}
    </div>
  );
}

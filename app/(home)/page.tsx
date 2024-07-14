"use client";

import Input from "../componenets/input";
import Button from "../componenets/button";

import { useFormState } from "react-dom";
import smsLogin from "./action";

const initial = {
  token: false,
  error: undefined,
};

export default function Home() {
  const [state, dispatch] = useFormState(smsLogin, initial);
  return (
    <div className="p-10">
      <form action={dispatch} className="flex flex-col gap-4">
        <Input
          name="phone"
          type="number"
          placeholder="번호를 입력해주세요"
          required
          errors={[]}
        />
        <Input
          name="token"
          type="number"
          placeholder="인증번호를 입력해주세요"
          required
          errors={[]}
        />
        <Button text="인증"></Button>
      </form>
    </div>
  );
}

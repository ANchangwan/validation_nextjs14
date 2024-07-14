import Image from "next/image";
import Input from "../componenets/input";
import Button from "../componenets/button";

import onValidation from "./action";



export default function Home() {
  return (
    <div className="p-10">
      <form action={onValidation} className="flex flex-col gap-4">
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

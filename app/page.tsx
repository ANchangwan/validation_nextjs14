import Image from "next/image";
import Input from "./componenets/input";

export default function Home() {
  return (
    <div className="p-10">
      <form className="flex flex-col gap-4">
        <Input name="phone" errors={[]} required type="number" placeholder="번호를 입력해주세요" />
        <Input name="phone" errors={[]} required type="number" placeholder="번호를 입력해주세요" />
        <button className="py-3 px-10 rounded-md bg-blue-500 text-2xl">
          번호를 입력해주세요
        </button>
      </form>
    </div>
  );
}

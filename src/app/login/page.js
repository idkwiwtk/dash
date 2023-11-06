import TextInput from "@/component/Input/TextInput";
import Label from "@/component/text/Label";
import Image from "next/image";

const LoginScreen = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-red-100 ">
      <div className="flex flex-col w-1/2 gap-4 p-12 bg-blue-100 border border-black">
        <figure className="flex justify-center">
          <Image src={"next.svg"} width={300} height={100} />
        </figure>
        <div className="flex justify-between gap-2">
          <Label forId="id">ID</Label>
          <TextInput id="id" name="id" />
        </div>
        <div className="flex justify-between gap-2">
          <Label forId="pw">PW</Label>
          <TextInput id="pw" name="pw" />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

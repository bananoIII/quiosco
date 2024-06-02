import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5 ">
      <div className="relative w-60 h-40">
        <Image fill alt="Logo" src="/logo.png" />
      </div>
    </div>
  );
}

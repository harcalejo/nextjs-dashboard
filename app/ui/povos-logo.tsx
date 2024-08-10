import Image from "next/image";

export default function PovosLogo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/povos-color.png"
        width={180}
        height={180}
        alt="Logo Constructora Povos"
      />
    </div>
  );
}

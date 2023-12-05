import Image from "next/image";

export default function Background() {
  return (
    <Image
      alt="One Piece crew"
      src="/img/one-piece-crew.jpeg"
      fill
      sizes="100vw"
      quality={100}
      style={{
        objectFit: "cover",
      }}
    />
  );
}

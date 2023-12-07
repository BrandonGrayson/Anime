import { Anime } from "@/schemas/schemas";
import { getHeroData } from "./actions/actions";
import Image from "next/image";
import { relative } from "path";

export default async function HomePage() {
  const response = await getHeroData();
  const data: Anime = response.data[0];
  const synopsis = data.attributes.synopsis;

  return (
    <main>
      <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
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
      </div>
    </main>
  );
}

import { Anime } from "@/schemas/schemas";
import { getHeroData } from "./actions/actions";
import Image from "next/image";
import styles from "./homestyles.module.css";
import Navbar from "./components/Navbar";

export default async function HomePage() {
  const response = await getHeroData();
  const data: Anime = response.data[0];
  const title = data.attributes.titles.en;

  return (
    <main>
      <Navbar />

      <div
        style={{
          position: "relative",
          height: "100vh",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "3em",
            zIndex: 1,
          }}
          className={styles.heroTitle}
        >
          {title}
        </p>
        <Image
          alt="One Piece crew"
          src="/img/one-piece-crew.jpeg"
          fill
          sizes="100vw"
          quality={100}
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      </div>
    </main>
  );
}

import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Anime } from "@/schemas/schemas";

export default async function Home() {
  const [heroData, setHeroData] = useState<Anime[]>([]);

  const getHeroData = async () => {
    const res = await fetch(
      "https://kitsu.io/api/edge/anime?filter[text]=onepiece"
    );

    if (!res.ok) {
      throw new Error("failed to fetch hero img data");
    }

    return res.json();
  };

  useEffect(() => {
    const data = getHeroData();
  }, []);

  console.log("data", heroData);

  return <Grid></Grid>;
}

import { Anime } from "@/schemas/schemas";
import { getHeroData } from "./actions/actions";
import Background from "./Background";

export default async function Home() {
  const response = await getHeroData();
  const data: Anime = response.data[0];

  return <Background />;
}

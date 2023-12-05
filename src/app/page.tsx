import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Anime } from "@/schemas/schemas";
import { getHeroData } from "./actions/actions";
import Image from "next/image";

export default async function Home() {
  const response = await getHeroData();
  const data: Anime = response.data[0];

  return (
    <main>
      <Image
        src="/img/one-piece-crew.jpeg"
        height={400}
        width={400}
        alt="Picture of One Piece crew"
      />
    </main>
    // <Grid item xs={12} lg={6} xl={4}>
    //   <Card sx={{ maxWidth: "100%" }}>
    //     <CardMedia
    //       component="img"
    //       image={}
    //       alt="One Piece Cover"
    //       sx={{ height: 1500 }}
    //     />
    //   </Card>
    // </Grid>
  );
}

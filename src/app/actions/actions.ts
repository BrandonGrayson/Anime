export const getHeroData = async () => {
    const res = await fetch(
      "https://kitsu.io/api/edge/anime?filter[text]=onepiece",
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("failed to fetch hero img data");
    }

    return res.json();
};

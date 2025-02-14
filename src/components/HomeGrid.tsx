// import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { GridCardProps } from "../model/GameInterface";
import useGames, { Game } from "../hooks/useGames";
import { GridCard } from "./Card";
// import { GameCardContainer } from "./GameCardContainer";
import { GridCardSkeleton } from "./GameCardSkeleton";
import { useEffect, useState } from "react";
import useInfiniteScroll from "./UseInfiniteScroll";
import ScrollSpinner from "./ScrollSpinner";
// import { GameCardSkeleton } from "./GameCardSkeleton";

export default function HomeGrid({ gameQuery, onLoadMore }: GridCardProps) {
  const { data, count, error, isLoading } = useGames(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // alert(count);

  const [allGames, setAllGames] = useState<Game[]>([]);

  useEffect(() => {
    if (gameQuery.page === 1) {
      setAllGames(data);
    } else {
      setAllGames((prev) => [...prev, ...data]);
    }
  }, [data, gameQuery.page]);

  const hasMore = allGames.length < count;
  // const skeletons = Array(gameQuery.pageSize).fill(0); // Match pageSize for skeletons

  // Trigger infinite scroll
  useInfiniteScroll(
    () => {
      if (!isLoading && hasMore) onLoadMore();
    },
    isLoading,
    hasMore
  );

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid container spacing={3} sx={{ marginTop: "10px" }}>
        {allGames.map((game) => (
          <Grid item key={game.id} xs={12} sm={6} md={4} lg={4} xl={2.3}>
            <GridCard game={game} />
          </Grid>
        ))}

        {/* Initial Loading Skeletons */}
        {isLoading &&
          gameQuery.page === 1 &&
          Array(gameQuery.pageSize)
            .fill(0)
            .map((_, index) => (
              <Grid
                item
                key={`skeleton-${index}`}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2.3}
              >
                <GridCardSkeleton />
              </Grid>
            ))}

        {true && ( // Force show spinner
          <Grid item xs={12}>
            <ScrollSpinner />
          </Grid>
        )}
      </Grid>

      {!hasMore && allGames.length > 0 && (
        <Typography sx={{ color: "white", textAlign: "center", py: 2 }}>
          You've reached the end
        </Typography>
      )}
    </>
  );
}

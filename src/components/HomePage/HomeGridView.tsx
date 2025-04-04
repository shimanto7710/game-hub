// import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { GridCardProps } from "../../model/GameInterface";
import useGames, { Game } from "../../hooks/useGames";
import { GameCard } from "./GameCard";
// import { GameCardContainer } from "./GameCardContainer";
import { GridCardSkeleton } from "./GameCardSkeleton";
import { useEffect, useState } from "react";
import useInfiniteScroll from "./UseInfiniteScroll";
import ScrollSpinner from "../ScrollSpinner";
// import { GameCardSkeleton } from "./GameCardSkeleton";

export default function HomeGridView({
  gameQuery,
  onLoadMore,
  displayOption,
}: GridCardProps) {
  const { data, count, error, isLoading } = useGames(gameQuery);
  // const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // alert(count);

  const [allGames, setAllGames] = useState<Game[]>([]);

  // useEffect(() => {
  //   if (gameQuery.page === 1) {
  //     setAllGames(data);
  //   } else {
  //     setAllGames((prev) => [...prev, ...data]);
  //   }
  // }, [data, gameQuery.page]);

  useEffect(() => {
    // alert("useEffect");
    if (gameQuery.page === 1) {
      setAllGames(data);
    } else {
      // Filter out duplicates before adding new games
      setAllGames((prev) => {
        const existingIds = new Set(prev.map((game) => game.id));
        const newGames = data.filter((game) => !existingIds.has(game.id));
        return [...prev, ...newGames];
      });
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
      <Grid container spacing={3} sx={{ marginTop: "0px" }}>
        {allGames.map((game) => (
          <Grid
            item
            key={game.id}
            xs={displayOption === "list" ? 12 : 12}
            sm={displayOption === "list" ? 12 : 6}
            md={displayOption === "list" ? 12 : 4}
            lg={displayOption === "list" ? 12 : 4}
            xl={displayOption === "list" ? 12 : 2.3}
            sx={
              displayOption === "list"
                ? {
                    maxWidth: "800px",
                    margin: "0 auto",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }
                : {}
            }
          >
            <GameCard
              game={game}
              variant={displayOption === "list" ? "list" : "grid"}
            />
          </Grid>
        ))}

        {/* Loading Skeletons */}
        {isLoading &&
          gameQuery.page === 1 &&
          Array(gameQuery.pageSize)
            .fill(0)
            .map((_, index) => (
              <Grid
                item
                key={`skeleton-${index}`}
                xs={12}
                sx={
                  displayOption === "list"
                    ? {
                        maxWidth: "800px",
                        margin: "0 auto",
                      }
                    : {}
                }
              >
                <GridCardSkeleton variant={displayOption} />
              </Grid>
            ))}

        {hasMore && (
          <Grid item xs={12}>
            <ScrollSpinner />
          </Grid>
        )}
      </Grid>

      {/* ... existing end message ... */}
    </>
  );
}

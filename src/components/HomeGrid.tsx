// import { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { GridCardProps } from "../model/GameInterface";
import useGames from "../hooks/useGames";
import { GridCard } from "./Card";
// import { GameCardContainer } from "./GameCardContainer";
import { GridCardSkeleton } from "./GameCardSkeleton";
// import { GameCardSkeleton } from "./GameCardSkeleton";

export default function HomeGrid({ gameQuery }: GridCardProps) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Typography>{error}</Typography>}
      <Grid container spacing={3} sx={{ marginTop: "10px" }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.3}
              key={skeleton}
              sx={{ position: "relative" }}
            >
              <Box sx={{ overflow: "hidden" }}>
                <GridCardSkeleton />
                <GridCardSkeleton />
              </Box>
              {/* <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer> */}
            </Grid>
          ))}
        {data.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.3}
            key={card.id}
            sx={{ position: "relative" }}
          >
            {/* <GameCardContainer children={<GridCard game={card}></GridCard>} /> */}
            <GridCard game={card}></GridCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

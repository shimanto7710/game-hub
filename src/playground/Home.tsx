import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../styles/theme";
import HomeGrid from "../components/HomeGrid";
import { useOutletContext } from "react-router-dom";
import { GameQuery } from "../model/GameInterface";
import { PlatformSelector } from "../components/PlatformSelector";
import { Platform } from "../hooks/useGames";
import { SortSelector } from "../components/SortSelector";
// import { GameQuery } from "../model/GameInterface";

const Home: React.FC = () => {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const gameQuery = useOutletContext<GameQuery>();
  const { gameQuery, setGameQuery } = useOutletContext<{
    gameQuery: GameQuery;
    setGameQuery: (query: GameQuery) => void;
  }>();
  return (
    <>
      <Box sx={{ width: "100%", height: "100%", bgcolor: colors.background }}>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "white",
            fontSize: "70px",
            marginBottom: "0px",
          }} // Or use fontWeight: 700 for more control
        >
          New and trending
        </Typography>

        <Typography
          sx={{
            color: "white",
            fontSize: "15px",
            marginTop: "0px",
          }} // Or use fontWeight: 700 for more control
        >
          Based on player counts and release date
        </Typography>

        <Box sx={{ display: "flex" }}>
          {/* <SortSelector
            onSelectedSortOrder={function (order: string): void {
              throw new Error("Function not implemented.");
            }}
            sortdOrder={""}
          ></SortSelector> */}

          <PlatformSelector
            onSelectedPlatform={function (platform: Platform): void {
              setGameQuery({ ...gameQuery, platform: platform });
            }}
            selectedPlatform={null}
          ></PlatformSelector>

          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Box>
        <HomeGrid gameQuery={gameQuery} />
        {/* <PPP></PPP> */}
      </Box>
    </>
  );
};

export default Home;

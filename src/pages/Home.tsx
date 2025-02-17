import React, { useState } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import { customColors } from "../styles/theme";
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

  // const [displayOption, setDisplayOption] = useOutletContext<{
  //   type: string;
  // }>();

  const [displayOption, setDisplayOption] = useState<string>("grid");

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newView: string | null
  ) => {
    if (newView !== null) {
      setDisplayOption(newView);
    }
  };

  return (
    <>
      <Box
        sx={{ width: "100%", height: "100%", bgcolor: customColors.background }}
      >
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
            marginBottom: "15px",
            marginLeft: "5px",
          }} // Or use fontWeight: 700 for more control
        >
          Based on player counts and release date
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Left Section: PlatformSelector & SortSelector */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <PlatformSelector
              onSelectedPlatform={(platform: Platform) =>
                setGameQuery({ ...gameQuery, platform: platform, page: 1 })
              }
              selectedPlatform={null}
            />

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrder, page: 1 })
              }
            />
          </Box>

          {/* Right Section: Display Options */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            p={1}
            borderRadius={1}
          >
            <Typography color="gray">Display options:</Typography>
            <ToggleButtonGroup
              value={displayOption}
              exclusive
              onChange={handleChange}
              sx={{
                backgroundColor: "#181818",
                borderRadius: "8px",
              }}
            >
              <ToggleButton
                value="grid"
                sx={{
                  backgroundColor: "#333",
                  color: "#666",
                  "&.Mui-selected": {
                    color: "#fff",
                    backgroundColor: "#222",
                  },
                  "&:hover": {
                    backgroundColor: "#444",
                  },
                }}
              >
                <GridViewIcon />
              </ToggleButton>
              <ToggleButton
                value="list"
                sx={{
                  backgroundColor: "#333",
                  color: "#666",
                  "&.Mui-selected": {
                    color: "#fff",
                    backgroundColor: "#222",
                  },
                  "&:hover": {
                    backgroundColor: "#444",
                  },
                }}
              >
                <ViewAgendaIcon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>

        <HomeGrid
          gameQuery={gameQuery}
          displayOption={displayOption}
          onLoadMore={() => {
            // alert("Load more");
            setGameQuery({
              ...gameQuery,
              page: (gameQuery.page || 1) + 1,
            });
          }}
        />
        {/* <PPP></PPP> */}
      </Box>
    </>
  );
};

export default Home;

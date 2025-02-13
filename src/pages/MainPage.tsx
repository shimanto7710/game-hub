import { Box, Stack } from "@mui/material";
import { AppNavbar } from "../components/AppNavbar";
import { Outlet } from "react-router-dom";
import { HomeDrawer } from "../components/Drawer";
import { colors } from "../styles/theme";
import { useState } from "react";
import { GameQuery } from "../model/GameInterface";

export const MainPage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Box paddingRight={7} paddingLeft={0} bgcolor={colors.background}>
      <Stack
        direction="column"
        sx={{
          height: "100%",
          bgcolor: colors.background,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100px",
            borderRadius: 1,
          }}
        >
          <AppNavbar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText: searchText });
            }}
          />
        </Box>

        {/* Main Content */}
        <Stack spacing={1} direction="row" sx={{ flex: 1 }}>
          {/* Side Menu */}
          <Box sx={{ width: "100%", borderRadius: 1, flex: 2 }}>
            <HomeDrawer
              gameQuery={gameQuery}
              onSelectedGenre={(genre) => {
                // alert(genre);
                setGameQuery({ ...gameQuery, genre: genre });
              }}
            ></HomeDrawer>
          </Box>

          {/* Content Area */}
          <Box
            sx={{
              bgcolor: "#e95f65",
              width: "100%",
              borderRadius: 1,
              flex: 9,
            }}
          >
            <Outlet context={{ gameQuery, setGameQuery }} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

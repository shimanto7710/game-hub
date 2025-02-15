import { Box, Stack } from "@mui/material";
import { AppNavbar } from "../components/AppNavbar";
import { Outlet } from "react-router-dom";
import { HomeDrawer } from "../components/Drawer";
import { colors } from "../styles/theme";
import { useState } from "react";
import { GameQuery } from "../model/GameInterface";
// import { getLast30DateRange } from "../app/utils";

export const MainPage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={colors.background}
    >
      <Box
        paddingRight={7}
        paddingLeft={0}
        width={{ lg: "100%", xs: "100%", sm: "100%", md: "100%", xl: "70%" }}
        bgcolor={colors.background}
      >
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
                  setGameQuery({ ...gameQuery, genre: genre, page: 1 });
                }}
                onChangeGameQuery={(dates, sortedBy) => {
                  setGameQuery({
                    ...gameQuery,
                    dates: dates,
                    page: 1,
                    sortOrder: sortedBy || "",
                  });
                }}
              />
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
    </Box>
  );
};

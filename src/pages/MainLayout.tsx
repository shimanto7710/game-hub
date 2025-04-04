import { Box, Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { MainDrawer } from "../components/MainLayout/MainDrawer";
import { customColors } from "../styles/theme";
import { useState } from "react";
import { GameQuery } from "../model/GameInterface";
import { AppNavbar } from "../components/MainLayout/AppNavbar";
// import { getLast30DateRange } from "../app/utils";

export const MainLayout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const navigate = useNavigate();
  // const [gameDetails,setGameDetails]=useState<GameDetails>({} as GameDetails);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={customColors.background}
    >
      <Box
        paddingRight={7}
        paddingLeft={0}
        width={{ lg: "100%", xs: "100%", sm: "100%", md: "100%", xl: "80%" }}
        bgcolor={customColors.background}
      >
        <Stack
          direction="column"
          sx={{
            height: "100%",
            bgcolor: customColors.background,
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
                // alert(searchText);
                navigate(`/`);
                setGameQuery({ ...gameQuery, searchText: searchText });
              }}
              initialSearchText={gameQuery.searchText}
            />
          </Box>

          {/* Main Content */}
          <Stack spacing={1} direction="row" sx={{ flex: 1 }}>
            {/* Side Menu */}
            <Box sx={{ width: "100%", borderRadius: 1, flex: 2 }}>
              <MainDrawer
                onClickHome={() => {
                  navigate(`/`);
                  setGameQuery({
                    ...gameQuery,
                    genre: null,
                    page: 1,
                    dates: "",
                    sortOrder: "-relevance",
                    searchText: "",
                    platform: null,
                  });
                }}
                gameQuery={gameQuery}
                onSelectedGenre={(genre) => {
                  navigate(`/`);
                  setGameQuery({ ...gameQuery, genre: genre, page: 1 });
                }}
                onChangeGameQuery={(dates, sortedBy) => {
                  navigate(`/`);
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
                bgcolor: customColors.background,
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

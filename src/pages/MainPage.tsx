import {
  Box,
  createTheme,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import SideMenu from "../components/SideMenu";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { useState } from "react";
import { AppNavbar } from "../components/AppNavbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    custom: {
      blue: "#1a73e8",
      gradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
  },
});

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
export const MainPage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        spacing={1}
        direction="column"
        sx={{ height: "100vh", bgcolor: "#181414" }}
      >
        {/* AppNavbar */}
        <Box
          sx={{
            width: "100%",
            height: "100px", // Ensure Navbar Box has enough height
            borderRadius: 1,
          }}
        >
          <AppNavbar />
        </Box>

        {/* Main Content */}
        <Stack spacing={1} direction="row" sx={{ flex: 1 }}>
          {/* Side Menu */}
          <Box sx={{ width: "100%", borderRadius: 1, flex: 1 }}>
            <SideMenu
              gameQuery={gameQuery}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </Box>

          {/* Content Area */}
          <Box
            sx={{ bgcolor: "#e95f65", width: "100%", borderRadius: 1, flex: 4 }}
          >
            {/* Main content goes here */}
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};

import Box from "@mui/material/Box";
import { GenreList } from "./GenreList";
import { GameQueryProps } from "../../model/GameInterface";
// import { GameQuery } from "../pages/MainPage";

export default function SideMenu({
  gameQuery,
  onSelectedGenre,
}: GameQueryProps) {
  return (
    <Box
      color="#151515"
      sx={{
        overflow: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbar for Chrome/Safari
        },
        scrollbarWidth: "none", // Hide scrollbar for Firefox
        // "-ms-overflow-style": "none", // Hide scrollbar for IE/Edge
      }}
    >
      <GenreList
        selectedGenre={gameQuery.genre}
        onSelectedGenre={(genre) => onSelectedGenre(genre)}
      />
    </Box>
  );
}

import Box from "@mui/material/Box";
import { GenreList } from "./GenreList";
import { GameQuery } from "../App";
import { Genre } from "../hooks/useGenres";

// const drawerWidth = 240;

// const Drawer = styled(MuiDrawer)({
//   width: drawerWidth,
//   flexShrink: 0,
//   boxSizing: "border-box",
//   mt: 10,
//   [`& .${drawerClasses.paper}`]: {
//     width: drawerWidth,
//     boxSizing: "border-box",
//     borderRight: "none", // Remove the right border
//   },
// });

export interface Props {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: Genre) => void;
}

export default function SideMenu({ gameQuery, onSelectedGenre }: Props) {
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
        "-ms-overflow-style": "none", // Hide scrollbar for IE/Edge
      }}
    >
      <GenreList
        selectedGenre={gameQuery.genre}
        onSelectedGenre={(genre) => onSelectedGenre(genre)}
      />
    </Box>
  );
}

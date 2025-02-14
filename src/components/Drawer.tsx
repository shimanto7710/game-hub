import { Box, List, ListItem, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import { useState } from "react";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/theme"; // Import colors from theme
import { GameQuery } from "../model/GameInterface";
import HoverBadge from "./HoverBadge";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
  get2024StartToToday,
  getLast30DateRange,
  getLast7Days,
  getNext7Days,
  getYearStartToToday,
} from "../app/utils";
import { Genre } from "../hooks/useGenres";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export interface HomeDrawerProps {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: Genre) => void;
  onChangeGameQuery: (dates: string, sortedBy?: string) => void;
}

export const HomeDrawer = ({
  gameQuery,
  onSelectedGenre,
  onChangeGameQuery,
}: HomeDrawerProps) => {
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Reviews", path: "/review" },
    // { text: "New Releases", path: "/top-10" },
    // { text: "About", path: "/about" },
  ];

  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const navigate = useNavigate();

  return (
    <Box>
      <List sx={{ marginTop: "30px", marginLeft: "40px" }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => navigate(item.path)}
            sx={{
              padding: "10px 0", // Adjust the padding to make the text more spaced out
            }}
          >
            <Typography
              sx={{
                fontSize: "22px", // Increase font size here
                color: colors.text, // Ensure text color is visible on dark background
                fontWeight: "bold", // Optional: make the font bold
              }}
            >
              {item.text}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography
        marginTop={0}
        marginBottom={2}
        variant="h6"
        fontSize="2xl"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "22px",
          marginLeft: "40px",
        }} // Or use fontWeight: 700 for more control
      >
        New Releases
      </Typography>

      <HoverBadge
        onClick={() => {
          onChangeGameQuery(getLast30DateRange()), "";
        }}
        text="Last 30 days"
        icon={<StarIcon />}
      />
      <HoverBadge
        onClick={() => {
          onChangeGameQuery(getLast7Days(), "");
        }}
        text="This Week"
        icon={<WhatshotIcon />}
      />
      <HoverBadge
        onClick={() => {
          onChangeGameQuery(getNext7Days()), "";
        }}
        text="Next Week"
        icon={<SkipNextIcon />}
      />

      <Typography
        marginTop={0}
        marginBottom={2}
        variant="h6"
        fontSize="2xl"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "22px",
          marginLeft: "40px",
          marginTop: "20px",
        }} // Or use fontWeight: 700 for more control
      >
        Top
      </Typography>

      <HoverBadge
        onClick={() => {
          // alert("Top 10");
          onChangeGameQuery(getYearStartToToday(), "-metacritic");
        }}
        text="Best of the year"
        icon={<EmojiEventsIcon />}
      />

      <HoverBadge
        onClick={() => {
          // alert("Top 10");
          onChangeGameQuery(get2024StartToToday(), "-added");
        }}
        text="Popular in 2024"
        icon={<BarChartIcon />}
      />

      <HoverBadge
        onClick={() => {
          // alert("Top 10");
          onChangeGameQuery("", "-metacritic");
        }}
        text="All time top 250"
        icon={<BarChartIcon />}
      />

      <SideMenu
        gameQuery={gameQuery}
        onSelectedGenre={onSelectedGenre}
        // onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
      />
    </Box>
  );
};

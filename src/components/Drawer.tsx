import { Box, List, ListItem, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
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

// Update the interface to allow resetting the genre by accepting null.
export interface HomeDrawerProps {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: Genre | null) => void;
  onChangeGameQuery: (dates: string, sortedBy?: string) => void;
  onClickHome: () => void;
}

export const HomeDrawer = ({
  gameQuery,
  onSelectedGenre,
  onChangeGameQuery,
  onClickHome,
}: HomeDrawerProps) => {
  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Reviews", path: "/review" },
    // { text: "New Releases", path: "/top-10" },
    // { text: "About", path: "/about" },
  ];

  const navigate = useNavigate();

  return (
    <Box>
      <List sx={{ marginTop: "30px", marginLeft: "40px" }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            onClick={() => {
              if (item.text === "Home") {
                // Reset filters for a fresh start.
                onSelectedGenre(null);
                onChangeGameQuery("", "");
                onClickHome && onClickHome();
              }
              navigate(item.path);
            }}
            sx={{
              padding: "10px 0",
              cursor: "pointer", // Makes it clear it's clickable
              "&:hover": {
                textDecoration: "underline", // Adds an underline on hover
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
                color: colors.text,
                fontWeight: "bold",
                transition: "text-decoration 0.3s ease-in-out", // Smooth transition
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
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "22px",
          marginLeft: "40px",
        }}
      >
        New Releases
      </Typography>

      <HoverBadge
        onClick={() => {
          onChangeGameQuery(getLast30DateRange(), "");
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
          onChangeGameQuery(getNext7Days(), "");
        }}
        text="Next Week"
        icon={<SkipNextIcon />}
      />

      <Typography
        marginTop={0}
        marginBottom={2}
        variant="h6"
        sx={{
          fontWeight: "bold",
          color: "white",
          fontSize: "22px",
          marginLeft: "40px",
          marginTop: "20px",
        }}
      >
        Top
      </Typography>

      <HoverBadge
        onClick={() => {
          onChangeGameQuery(getYearStartToToday(), "-metacritic");
        }}
        text="Best of the year"
        icon={<EmojiEventsIcon />}
      />

      <HoverBadge
        onClick={() => {
          onChangeGameQuery(get2024StartToToday(), "-added");
        }}
        text="Popular in 2024"
        icon={<BarChartIcon />}
      />

      <HoverBadge
        onClick={() => {
          onChangeGameQuery("", "-metacritic");
        }}
        text="All time top 250"
        icon={<BarChartIcon />}
      />

      <SideMenu gameQuery={gameQuery} onSelectedGenre={onSelectedGenre} />
    </Box>
  );
};

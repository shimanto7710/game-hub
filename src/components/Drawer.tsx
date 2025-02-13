import {
  Box,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";
import { colors } from "../styles/theme"; // Import colors from theme
import { GameQueryProps } from "../model/GameInterface";

export const HomeDrawer = ({ gameQuery, onSelectedGenre }: GameQueryProps) => {
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
            button
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

      <SideMenu
        gameQuery={gameQuery}
        onSelectedGenre={onSelectedGenre}
        // onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
      />
    </Box>
  );
};

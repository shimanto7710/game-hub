// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

// Define your colors here
export const colors = {
  background: "#151515", // Black background
  text: "#ffffff", // White text color
  primary: "#1976d2", // Example primary color
  secondary: "#dc004e", // Example secondary color
  cardBg:"#202020",
  secondaryText:"#6f6f6f",
  altBg:"#202020",
  buttonBg:"#303030",
  gray:"#898989",
};

const theme = createTheme({
  palette: {
    background: {
      default: colors.background, // Set the background color for the entire app
    },
    text: {
      primary: colors.text, // Set the default text color
    },
    primary: {
      main: colors.primary, // Primary color for the app
    },
    secondary: {
      main: colors.secondary, // Secondary color for the app
    },
  },
});

export default theme;

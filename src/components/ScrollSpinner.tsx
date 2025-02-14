// components/ScrollSpinner.tsx
import { CircularProgress, Box } from "@mui/material";

const ScrollSpinner = () => (
  <Box display="flex" justifyContent="center" py={4} sx={{ width: "100%" }}>
    <CircularProgress
      size={40}
      thickness={4}
      sx={{
        color: "white",
        animationDuration: "550ms", // Slower animation
      }}
    />
  </Box>
);

export default ScrollSpinner;

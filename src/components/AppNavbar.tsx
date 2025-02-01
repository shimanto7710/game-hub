import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const AppNavbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: "100px", // Navbar height
        bgcolor: "transparent", // Background color
        alignItems: "center", // Center content vertically
        px: 2, // Padding on the sides
        gap: 2, // Space between elements
      }}
    >
      {/* Title */}
      <Typography marginLeft={4} marginRight={2} color="white" variant="h6">
        R A W G
      </Typography>

      {/* Search Box */}
      <Box sx={{ flex: 1 }}>
        <TextField
          fullWidth
          placeholder="Search game"
          variant="outlined"
          sx={{
            bgcolor: "#434343", // Background color inside the input field
            borderRadius: "25px", // Rounded input field
            height: "40px", // Set height of the TextField
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px", // Ensure the border is also rounded
              bgcolor: "#434343", // Background color inside the box
              color: "white", // Text color
              height: "40px", // Set the height of the input box
            },
            "& .MuiOutlinedInput-input": {
              padding: "8px 12px", // Reduce padding inside the input field
              fontSize: "14px", // Adjust font size if needed
            },
            "& .MuiInputBase-input::placeholder": {
              color: "#b0b0b0", // Placeholder text color
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#999999" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Stack>
  );
};

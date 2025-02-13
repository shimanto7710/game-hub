import { useState, KeyboardEvent } from "react"; // Add imports
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export interface Props {
  onSearch: (searchedText: string) => void;
}

export const AppNavbar = ({ onSearch }: Props) => {
  // Accept onSearch prop
  const [searchText, setSearchText] = useState(""); // Add state

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText); // Trigger search on Enter
    }
  };

  return (
    <Box width="100%">
      <Stack
        direction="row"
        sx={{
          height: "100px",
          bgcolor: "transparent",
          alignItems: "center",
          marginLeft: "15px",
          gap: 2,
          width: "100%",
        }}
      >
        <Typography marginLeft={3} marginRight={2} color="white" variant="h6">
          R A W G
        </Typography>

        <Box sx={{ flexGrow: 1, display: "flex" }}>
          <TextField
            fullWidth
            placeholder="Search game"
            variant="outlined"
            value={searchText} // Controlled input
            onChange={(e) => setSearchText(e.target.value)} // Update state
            onKeyDown={handleKeyDown} // Handle key presses
            sx={{
              bgcolor: "#434343",
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                bgcolor: "#434343",
                color: "white",
                height: "40px",
                "&:hover": {
                  bgcolor: "white",
                },
                "&:hover .MuiSvgIcon-root": {
                  color: "black",
                },
                "&.Mui-focused": {
                  bgcolor: "white",
                  color: "black",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                },
              },
              "& .MuiOutlinedInput-input": {
                padding: "8px 12px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#b0b0b0",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      color: "#999999",
                      transition: "color 0.3s",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

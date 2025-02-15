import { useState, KeyboardEvent } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close"; // Add close icon
import { colors } from "../styles/theme";

export interface Props {
  onSearch: (searchedText: string) => void;
}

export const AppNavbar = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  // Add clear handler
  const handleClear = () => {
    setSearchText("");
    onSearch("");
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              bgcolor: "#434343",
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                bgcolor: "#434343",
                color: colors.gray, // Changed from white to #303030
                height: "40px",
                "&:hover": {
                  bgcolor: "white",
                  color: "black",
                  "& .MuiOutlinedInput-input": {
                    color: "black",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#666",
                  },
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
              // ... rest of the styles
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#999999" }} />
                </InputAdornment>
              ),
              endAdornment: searchText && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClear}
                    sx={{
                      color: "#999999",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

// import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectedPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error } = usePlatforms();

  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    const platform = data.find((p) => p.name === event.target.value);
    if (platform) {
      onSelectedPlatform(platform);
      setSelectedValue(event.target.value);
    }
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={selectedPlatform?.name || selectedValue}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "#202020",
            color: "white",
            height: "40px", // Reduced height
            fontSize: "14px", // Adjusted font size
            padding: "5px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#202020",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#202020",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#202020",
            },
            "& .MuiSelect-icon": {
              color: "white",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "white", // Background when dropdown is open
                color: "black", // Font color when dropdown is open
                fontSize: "12px", // Smaller font size
              },
            },
          }}
        >
          <MenuItem value="">Platform</MenuItem>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              sx={{ fontSize: "12px" }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

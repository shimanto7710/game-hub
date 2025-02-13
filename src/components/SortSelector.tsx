// import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { BsChevronDown } from "react-icons/bs";

import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string;
}

export const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOptions = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");

  // const currentSortOrder = sortOptions.find(
  //   (order) => order.value === sortOrder
  // );

  const handleChange = (event: SelectChangeEvent) => {
    const option = sortOptions.find((p) => p.value === event.target.value);
    if (option) {
      onSelectSortOrder(option.value);
      setSelectedValue(event.target.value);
    }
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <Select
          value={sortOrder || selectedValue}
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
          <MenuItem value="">Order By</MenuItem>
          {sortOptions.map((option) => (
            <MenuItem
              key={option.label}
              value={option.value}
              sx={{ fontSize: "12px" }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

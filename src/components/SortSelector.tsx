import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { data, label } from "framer-motion/client";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (order: string) => void;
  sortdOrder: string;
}

export const SortSelector = ({ onSelectedSortOrder, sortdOrder }: Props) => {
  const sortOptions = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOptions.find(
    (order) => order.value === sortdOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOptions.map((order) => (
            <MenuItem
              onClick={() => {
                onSelectedSortOrder(order.value);
                // sortdOrder = order.label;
              }}
              key={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

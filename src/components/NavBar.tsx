import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { Props, SearchInput } from "./SearchInput";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

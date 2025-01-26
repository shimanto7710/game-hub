import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text
        display={{ base: "none", sm: "inline" }} // Hide on small screen (base), show on sm and larger
      >
        Dark Mode
      </Text>
      <Text
        display={{ base: "inline", sm: "none" }} // Show on small screens (base), hide on sm and larger
      >
        Dark
      </Text>
    </HStack>
  );
};

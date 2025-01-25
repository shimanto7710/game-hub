import { HStack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  return (
    // <HStack>
    //   {platformsx.map((platformx) => (
    //     <PlatformIcon platform={platformx} />
    //   ))}
    // </HStack>
    <HStack marginY={1}>
      {platforms.map((platformx) => (
        <PlatformIcon platform={platformx.slug} key={platformx.id} />
        // <Text>{[platform.name]}</Text>
        // <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;

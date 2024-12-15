import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Stack } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";
import { Text } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms = [] }: Props) => {
  // Map platform slugs to corresponding icons
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const platformsx = [
    "pc",
    "playstation",
    "xbox",
    "nintendo",
    "mac",
    "linux",
    "android",
    "ios",
    "web",
  ];

  return (
    // <HStack>
    //   {platformsx.map((platformx) => (
    //     <PlatformIcon platform={platformx} />
    //   ))}
    // </HStack>
    <HStack marginY={1}>
      {platforms.map((platformx) => (
        <PlatformIcon platform={platformx.slug} />
        // <Text>{[platform.name]}</Text>
        // <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );

  // return (

  //   <HStack marginY={1}>
  //     {/* console.log(`No icon found for platform:`); */}
  //     {platforms.map((platform) => {
  //       // const IconComponent = iconMap[platform.slug]; // Retrieve icon from map

  //       // // Gracefully handle unsupported platforms
  //       // if (!IconComponent) {
  //       //   console.log(`No icon found for platform: ${platform.slug}`);
  //       //   return null;
  //       // }

  //       return (
  //         // <Text>{[platform.name]}</Text>
  //         // <Icon
  //         //   key={platform.id} // Ensure unique key for each item
  //         //   as={IconComponent} // Assign dynamic icon
  //         //   color="gray.500"
  //         //   boxSize={5} // Adjust size for icons
  //         // />
  //         <Icon
  //           key={platform.id}
  //           as={iconMap[platform.slug]}
  //           color="gray.500"
  //         />
  //       );
  //     })}
  //   </HStack>
  // );
};

export default PlatformIconList;

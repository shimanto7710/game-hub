import { Icon, HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";

interface PlatformIconProps {
  platform: string;
}

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  let icon;

  switch (platform) {
    case "pc":
      icon = (
        <Icon>
          <FaWindows />
        </Icon>
      );
      break;
    case "playstation":
      icon = (
        <Icon>
          <FaPlaystation />
        </Icon>
      );
      break;
    case "xbox":
      icon = (
        <Icon>
          <FaXbox />
        </Icon>
      );
      break;
    case "nintendo":
      icon = (
        <Icon>
          <SiNintendo />
        </Icon>
      );
      break;
    case "mac":
      icon = (
        <Icon>
          <FaApple />
        </Icon>
      );
      break;
    case "linux":
      icon = (
        <Icon>
          <FaLinux />
        </Icon>
      );
      break;
    case "android":
      icon = (
        <Icon>
          <FaAndroid />
        </Icon>
      );
      break;
    case "ios":
      icon = (
        <Icon>
          <MdPhoneIphone />
        </Icon>
      );
      break;
    case "web":
      icon = (
        <Icon>
          <BsGlobe />
        </Icon>
      );
      break;
    default:
      icon = (
        <Icon>
          <BsGlobe />
        </Icon>
      ); // Default icon if no match
  }

  return icon;
};

export default PlatformIcon;

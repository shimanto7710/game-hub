import { Icon } from "@chakra-ui/react";
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
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaWindows />
        </Icon>
      );
      break;
    case "playstation":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaPlaystation />
        </Icon>
      );
      break;
    case "xbox":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaXbox />
        </Icon>
      );
      break;
    case "nintendo":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <SiNintendo />
        </Icon>
      );
      break;
    case "mac":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaApple />
        </Icon>
      );
      break;
    case "linux":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaLinux />
        </Icon>
      );
      break;
    case "android":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <FaAndroid />
        </Icon>
      );
      break;
    case "ios":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <MdPhoneIphone />
        </Icon>
      );
      break;
    case "web":
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <BsGlobe />
        </Icon>
      );
      break;
    default:
      icon = (
        <Icon boxSize="24px">
          {" "}
          {/* Increase size */}
          <BsGlobe />
        </Icon>
      ); // Default icon if no match
  }

  return icon;
};

export default PlatformIcon;

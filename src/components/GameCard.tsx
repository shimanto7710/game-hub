import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../serviecs/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>

            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card.Root>
    </>
  );
};

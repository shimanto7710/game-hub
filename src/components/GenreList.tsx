import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../serviecs/image-url";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {error && <Text>{error}</Text>}
      <Heading fontSize="2xl" marginLeft={5} marginBottom={3}>
        Genres
      </Heading>
      <List paddingX="20px">
        {data.map((genre) => (
          <ListItem listStyleType="none" key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                borderRadius="3px"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>

              <Button
                whiteSpace="normal"
                textAlign="center"
                fontSize="lg"
                variant="ghost"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectedGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

import { List, ListItem, Spinner, Text, HStack, Image } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../serviecs/image-url";
import { Typography } from "@mui/material";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Text>{error}</Text>}

      <List>
        {data.map((genre) => {
          const isSelected = selectedGenre?.id === genre.id;
          return (
            <ListItem
              key={genre.id}
              paddingY="6px"
              borderRadius="8px"
              transition="box-shadow 0.2s ease, transform 0.2s ease"
              bg={isSelected ? "#424242" : "transparent"} // Use #424242 when selected
              _hover={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transform: "scale(1.01)",
                backgroundColor: isSelected ? "#424242" : "#2c2c2c", // Non-selected hover: #2c2c2c
              }}
              cursor="pointer"
              onClick={() => onSelectedGenre(genre)}
            >
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Typography sx={{ color: "white" }}>{genre.name}</Typography>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

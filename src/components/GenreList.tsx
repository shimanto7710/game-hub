import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
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

      <Typography
        marginLeft={6}
        marginTop={5}
        variant="h5"
        fontSize="2xl"
        sx={{ fontWeight: "bold", color: "white" }} // Or use fontWeight: 700 for more control
      >
        Home
      </Typography>

      <Typography
        marginLeft={6}
        marginTop={5}
        marginBottom={2}
        variant="h5"
        fontSize="2xl"
        sx={{ fontWeight: "bold", color: "white" }} // Or use fontWeight: 700 for more control
      >
        Genres
      </Typography>
      <List margin="0px">
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY="10px"
            paddingX="10px"
            borderRadius="8px"
            transition="box-shadow 0.2s ease, transform 0.2s ease"
            _hover={{
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Softer shadow
              transform: "scale(1.01)", // Slight zoom effect
              backgroundColor: "gray.50", // Subtle background highlight
            }}
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
              {/* <ClickableTypography
                selectedGenre={genre}
                onSelectedGenre={onSelectedGenre}
              /> */}
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

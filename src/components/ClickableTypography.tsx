import React from "react";
import { Genre } from "../hooks/useGenres";

interface ClickableTypographyProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre;
  style?: React.CSSProperties;
}

export const ClickableTypography: React.FC<Props> = ({
  selectedGenre,
  onSelectedGenre,
  style,
}) => {
  return (
    <span
      onClick={(text) => {
        onSelectedGenre(selectedGenre);
      }}
      style={{
        cursor: "pointer",

        ...style,
      }}
    >
      {selectedGenre.name}
    </span>
  );
};

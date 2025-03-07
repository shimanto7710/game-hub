import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
  page: number; // Add page
  pageSize: number; // Add pageSize
  dates: string;
}

export interface GameQueryProps {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: Genre) => void;
}

export interface GridCardProps {
  gameQuery: GameQuery;
  onLoadMore: () => void;
  displayOption: string;
}

export interface GameQueryFilterProps {
  gameQuery: GameQuery;
  onSelectedGenre: (genre: Genre) => void;
}

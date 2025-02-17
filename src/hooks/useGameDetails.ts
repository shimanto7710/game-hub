import useObjectData from "./useObjectData";

// Main interface for the game details
export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    metacritic: number;
    metacritic_platforms: MetacriticPlatform[];
    released: string;
    tba: boolean;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: { [key: string]: number };
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_name: string;
    reddit_description: string;
    reddit_logo: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game: any; // can be null or an object
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: ParentPlatform[];
    platforms: PlatformData[];
    stores: Store[];
    developers: Developer[];
    genres: Genre[];
    tags: Tag[];
    publishers: Publisher[];
    esrb_rating: EsrbRating;
    clip: any; // can be null or an object
    description_raw: string;
  }
  
  // Interfaces for nested objects
  
  export interface MetacriticPlatform {
    metascore: number;
    url: string;
    platform: {
      platform: number;
      name: string;
      slug: string;
    };
  }
  
  export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
  }
  
  export interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  }
  
  export interface ParentPlatform {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }
  
  export interface PlatformData {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: string | null;
      year_end: number | null;
      year_start: number | null;
      games_count: number;
      image_background: string;
    };
    released_at: string;
    requirements?: {
      minimum?: string;
      recommended?: string;
    };
  }
  
  export interface Store {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }
  
  export interface Developer {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }
  
  export interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }
  
  export interface EsrbRating {
    id: number;
    name: string;
    slug: string;
  }
  

  
const useGameDetails=(id:number)=> useObjectData<GameDetails>('/games/'+id, {},[id]);

export default useGameDetails;
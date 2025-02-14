import { GameQuery } from "../model/GameInterface";
import useData from "./useData";


export interface Platform{
  id:number;
  name:string,
  slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{ platform:Platform } [];
    metacritic: number;
    rating_top:number;
    released:string;
    slug:string;
    playtime:number;
  }

  
const useGames=(gameQuery:GameQuery)=> useData<Game>('/games', {params:{genres:gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText, page: gameQuery.page, page_size: gameQuery.pageSize, dates:gameQuery.dates}}, [gameQuery]);

export default useGames;
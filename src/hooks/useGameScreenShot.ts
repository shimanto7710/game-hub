import useObjectData from "./useObjectData";

export interface GameSS {
    count: number;
    next: string | null;
    previous: string | null;
    results: ApiResult[];
  }
  
  export interface ApiResult {
    image: string;
    hidden: boolean;
  }

  

  
const useGameSS=(id:number)=> useObjectData<GameSS>('/games/'+id+"/screenshots", {});

export default useGameSS;
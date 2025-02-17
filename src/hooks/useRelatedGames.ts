// import { GameQuery } from "../model/GameInterface";
import useData from "./useData";
import { Game } from "./useGames";

const useRelatedGames=(id:number)=> useData<Game>('/games/'+id+'/game-series', {}, [id]);

export default useRelatedGames;


import useObjectData from "./useObjectData";

export interface TwitchModel {
    id: number;
    external_id: number;
    name: string;
    description: string;
    created: string;  // ISO 8601 date string
    published: string;  // ISO 8601 date string
    thumbnail: string;
    view_count: number;
    language: string;
  }

  const useTwitch=(id:number)=> useObjectData<TwitchModel>('/games/'+id+'/twitch', {},[id]);

export default useTwitch;
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../serviecs/api-client";


interface FetchResponse<T>{
    count:number;
    results:T[];
}

const useData=<T>(endPoint:string)=>{
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState();
    const [isLoading,setloading]=useState(false)

    useEffect(() => {
        const controller=new AbortController();
        setloading(true);
        apiClient
          .get<FetchResponse<T>>(endPoint, {signal: controller.signal})
          .then((res) => {
            setData(res.data.results);
            setloading(false);
          })
          .catch((err) => {
            if(err instanceof CanceledError ) return ;
            setError(err.message);
            setloading(false);
          });

          return () =>controller.abort();
      },[]);

      return {data, error, isLoading}
}
export default useData;
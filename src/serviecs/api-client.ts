import axios  from "axios";
// 7de4a2d56a974481990034bd45b30a34
 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7de4a2d56a974481990034bd45b30a34'
    }
})
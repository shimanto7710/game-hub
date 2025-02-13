import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";
// 7de4a2d56a974481990034bd45b30a34
 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'7de4a2d56a974481990034bd45b30a34'
    }
})

// Async thunk for fetching data
export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (userId, { rejectWithValue }) => {
      try {
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          return rejectWithValue(error.response.data); // Pass error payload
        }
        return rejectWithValue(error); // Fallback for non-Axios errors
      }
    }
  );
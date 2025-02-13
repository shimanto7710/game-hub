import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../serviecs/api-client";

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    data: null,
    loading: false,
    error: null as string | null,
  },
  reducers: {}, // Add sync reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Failed to fetch data';
      });
  },
});

export default gameSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    orders: [],
  },
  reducers: {},
});

export default productsSlice.reducer;

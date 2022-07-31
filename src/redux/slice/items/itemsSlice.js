import { createSlice } from '@reduxjs/toolkit';

const initialStateProto = {
  allItems: [],
  itemsWithOutFilter: [],
  categories: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: { ...initialStateProto },
  reducers: {
    updateAllItems: (state, action) => {
      const { data } = action.payload;
      return { ...state, allItems: [...data], itemsWithOutFilter: [...data] };
    },
    updateForFilter: (state, action) => {
      const { filteredData } = action.payload;
      return { ...state, allItems: [...filteredData] };
    },
    updateCategories: (state, action) => {
      const { data } = action.payload;
      return { ...state, categories: [...data] };
    },
    clearData: () => {
      return { ...initialStateProto };
    },
  },
});

export const { updateAllItems, updateForFilter, updateCategories, clearData } =
  itemsSlice.actions;

export default itemsSlice.reducer;

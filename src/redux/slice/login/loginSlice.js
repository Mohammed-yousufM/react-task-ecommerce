import { createSlice } from '@reduxjs/toolkit';

const initialStateProto = {
  username: '',
  password: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    ...initialStateProto,
  },
  reducers: {
    updateForm: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    clearForm: () => {
      return { ...initialStateProto };
    },
  },
});

export const { updateForm, clearForm } = loginSlice.actions;

export default loginSlice.reducer;
